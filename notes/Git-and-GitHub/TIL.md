# Git & GitHub 

> ## Initial Setup (One-Time)
Configure your identity (required before committing):
- `git config --global user.name "Your Name"`
- `git config --global user.email "you@example.com"`

> ## Starting a Repository
### Create a New Local Repository
- `git init` — Initialize a new Git repository in the current folder.

### Clone an Existing Repository
- `git clone <url>` — Create a local copy of a remote repository.

> ## Pushing changes
1. **Stage changes**
   - `git add .` — Stage all modified and new files.
2. **Commit changes**
   - `git commit -m "message"` — Save staged changes to history.
3. **Push to remote**
   - `git push` — Upload local commits to the remote repository.

> ## Syncing With Remote( github is ahead of local)
- `git fetch` — Download remote history **without** modifying local files.
- `git pull` — Fetch **and merge** remote changes into the current branch.
- `git push` — Send local commits to the remote branch.

> ## Inspecting Changes Before Pushing
- **Commits not yet pushed**
  - `git log origin/main..HEAD --oneline`
- **Code differences not yet pushed**
  - `git diff origin/main..HEAD`

> ## Branches
- `git branch` — List local branches.
- `git branch <name>` — Create a new branch.
- `git switch <name>` — Switch to a branch.
- `git switch -b <name>` — Create and switch to a new branch.
- `git branch -d <name>` — Delete a branch.
- `git merge <name>` being on main - merges branch
> ## Undoing Changes

### Undo Last Commit (Destructive)
⚠️ Permanently removes the last commit and its changes.
- `git reset --hard HEAD~1`

### Unstage Files (Keep Changes)
- `git reset`

> ## Handling Divergent Branches
### Scenario
You edited files on GitHub and also committed locally. Git refuses to push due to divergent histories.

### Fix (Merge Strategy)
1. Set pull behavior:
   - `git config pull.rebase false`
2. Pull remote changes:
   - `git pull origin main`
3. Resolve conflicts (if any), then:
   - `git push`