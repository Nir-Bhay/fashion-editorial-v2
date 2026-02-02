# Quick Reference: PR Cleanup Commands

## Using GitHub Web UI

### Delete Branches for Merged PRs
1. Go to: https://github.com/Nir-Bhay/fashion-editorial-v2/branches
2. Look for "Yours" or "Stale" branches
3. Click the trash icon next to each merged branch

### Close Open PRs
1. Go to: https://github.com/Nir-Bhay/fashion-editorial-v2/pulls
2. Open each PR you want to close
3. Scroll to bottom and click "Close pull request"

## Using GitHub CLI

### Setup
```bash
# Install GitHub CLI if not already installed
# See: https://cli.github.com/

# Login to GitHub
gh auth login
```

### Delete Merged PR Branches
```bash
# Delete a specific branch
gh pr view PR_NUMBER --json headRefName -q .headRefName | xargs -I {} git push origin --delete {}

# Or manually:
git push origin --delete BRANCH_NAME
```

### Close a PR
```bash
gh pr close PR_NUMBER
```

### List All Open PRs
```bash
gh pr list --state open
```

### View PR Details
```bash
gh pr view PR_NUMBER
```

## Automated Cleanup Script

We've created a helper script: `cleanup-merged-branches.sh`

```bash
# Run the cleanup script
./cleanup-merged-branches.sh
```

This script will:
- Check for GitHub CLI installation
- Verify authentication
- Delete branches for all merged PRs
- Ask for confirmation before making changes

## Manual Branch Deletion

If you prefer to delete branches manually:

```bash
# List all remote branches
git branch -r

# Delete a specific remote branch
git push origin --delete BRANCH_NAME

# Delete local branch (if needed)
git branch -D BRANCH_NAME

# Clean up stale references
git fetch --prune
```

## Identifying Duplicate PRs

Many PRs (#8-#13) appear to address similar accessibility issues. To compare them:

```bash
# View PR diff
gh pr diff PR_NUMBER

# Or view in browser
gh pr view PR_NUMBER --web
```

## Recommended Workflow

1. **Review merged PRs**: Check that all merged PRs (#5, #14-#19) are properly merged
2. **Delete merged branches**: Use the cleanup script or manual commands
3. **Review duplicate PRs**: Compare PRs #8-#13 to find the best solution
4. **Merge or close duplicates**: Keep the best PR, close others
5. **Review performance PRs**: Evaluate PRs #1-#4
6. **Close PR #7**: This appears to be a mistake (targets main branch directly)

## Important Notes

⚠️ **Always review PRs before closing** - Make sure you're not losing important work
⚠️ **Test changes before merging** - Ensure code works as expected
⚠️ **Branch protection** - Consider setting up rules to prevent future issues

## Need Help?

If you need to perform these actions but lack permissions:
- Contact the repository owner
- Request admin access
- Or ask the repo owner to run the cleanup script
