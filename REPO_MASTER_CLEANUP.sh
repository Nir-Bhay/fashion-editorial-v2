#!/bin/bash

# =================================================================
# MASTER REPOSITORY CLEANUP SCRIPT
# =================================================================
# This script will:
# 1. Merge high-quality PRs (Performance, Build Fixes, Accessibility)
# 2. Close duplicate/redundant PRs
# 3. Delete all stale branches (remote and local)
# 
# Usage: bash REPO_MASTER_CLEANUP.sh
# =================================================================


# 1. Check for GH CLI
if ! command -v gh &> /dev/null; then
    echo "❌ Error: 'gh' CLI not found. Please install it."
    exit 1
fi

# 2. Check Auth
if ! gh auth status &> /dev/null; then
    echo "❌ Error: You are not logged in to GitHub."
    echo "   Run 'gh auth login' first."
    exit 1
fi

# --- CONFIGURATION ---
TO_MERGE=(1 4 3 6 13)
TO_CLOSE=(2 7 8 9 10 11 12)
# Include recently merged PRs for branch cleanup
BRANCH_CLEANUP_CANDIDATES=(5 14 15 16 17 18 19 1 4 3 6 13 2 7 8 9 10 11 12)

echo "🚀 Starting Master Cleanup (Robust Mode)..."

# --- MERGING PROCESS ---
echo ""
echo "🔄 PHASE 1: Merging Approved PRs..."
for pr in "${TO_MERGE[@]}"; do
    # Check status first to avoid errors
    state=$(gh pr view "$pr" --json state -q .state 2>/dev/null || echo "not_found")
    
    if [ "$state" == "OPEN" ]; then
        echo "➡️  Merging PR #$pr..."
        # Try merge, continue on error
        if gh pr merge "$pr" --merge --delete-branch; then
            echo "   ✅ Success: Merged #$pr"
        else
            echo "   ⚠️  Failed to merge #$pr. Check for conflicts or CI failures."
        fi
    elif [ "$state" == "MERGED" ]; then
        echo "   ℹ️  PR #$pr is already merged."
    else
        echo "   ℹ️  PR #$pr state is $state (skipping)"
    fi
done

# --- CLOSING PROCESS ---
echo ""
echo "🔄 PHASE 2: Closing Redundant PRs..."
for pr in "${TO_CLOSE[@]}"; do
    state=$(gh pr view "$pr" --json state -q .state 2>/dev/null || echo "not_found")
    
    if [ "$state" == "OPEN" ]; then
        echo "➡️  Closing PR #$pr..."
        if gh pr close "$pr" --delete-branch; then
            echo "   ✅ Success: Closed #$pr"
        else
            echo "   ⚠️  Failed to close #$pr"
        fi
    else
        echo "   ℹ️  PR #$pr is already closed/merged ($state)."
    fi
done

# --- BRANCH CLEANUP ---
echo ""
echo "🔄 PHASE 3: Cleaning Stale Branches..."
for pr in "${BRANCH_CLEANUP_CANDIDATES[@]}"; do
    branch=$(gh pr view "$pr" --json headRefName -q .headRefName 2>/dev/null || echo "")
    
    if [ -n "$branch" ] && [ "$branch" != "main" ]; then
        # Delete local
        if git show-ref --verify --quiet "refs/heads/$branch"; then
            echo "   🗑️  Deleting local branch: $branch"
            git branch -D "$branch" 2>/dev/null || true
        fi
        
        # Delete remote
        # echo "   🗑️  Deleting remote branch: $branch" 
        git push origin --delete "$branch" 2>/dev/null || true
    fi
done

echo ""
echo "✨ CLEANUP COMPLETED ✨"
