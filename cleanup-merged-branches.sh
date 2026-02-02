#!/bin/bash

# PR and Branch Cleanup Script
# This script helps clean up merged PRs and their branches
# Requires: gh (GitHub CLI) and appropriate permissions

set -e

echo "========================================"
echo "PR and Branch Cleanup Helper Script"
echo "========================================"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ Error: GitHub CLI (gh) is not installed"
    echo "Install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Error: Not authenticated with GitHub"
    echo "Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is installed and authenticated"
echo ""

# List of merged PR numbers
MERGED_PRS=(5 14 15 16 17 18 19)

echo "📋 Merged PRs to clean up: ${MERGED_PRS[*]}"
echo ""

# Function to delete branch for a PR
delete_pr_branch() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Get branch name
    local branch_name=$(gh pr view "$pr_number" --json headRefName -q .headRefName 2>/dev/null || echo "")
    
    if [ -z "$branch_name" ]; then
        echo "  ⚠️  Could not find branch for PR #$pr_number (may already be deleted)"
        return
    fi
    
    echo "  Branch: $branch_name"
    
    # Check if branch exists on remote
    if git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"; then
        echo "  🗑️  Deleting remote branch: $branch_name"
        git push origin --delete "$branch_name" 2>/dev/null || echo "  ⚠️  Could not delete branch (may lack permissions)"
    else
        echo "  ℹ️  Branch already deleted from remote"
    fi
    
    # Delete local branch if it exists
    if git show-ref --verify --quiet "refs/heads/$branch_name"; then
        echo "  🗑️  Deleting local branch: $branch_name"
        git branch -D "$branch_name" 2>/dev/null || echo "  ⚠️  Could not delete local branch"
    fi
    
    echo "  ✅ Done with PR #$pr_number"
    echo ""
}

# Confirm before proceeding
read -p "Do you want to delete branches for merged PRs? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Aborted by user"
    exit 0
fi

echo ""
echo "Starting cleanup..."
echo ""

# Process each merged PR
for pr_num in "${MERGED_PRS[@]}"; do
    delete_pr_branch "$pr_num"
done

echo "========================================"
echo "✅ Cleanup complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Review open PRs to identify duplicates"
echo "2. Merge or close open PRs as appropriate"
echo "3. Delete branches after closing PRs"
echo ""
echo "For more details, see: PR_CLEANUP_REPORT.md"
