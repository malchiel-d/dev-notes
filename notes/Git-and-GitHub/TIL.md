# Git & GitHub

## The Standard Workflow
- `git add .` — **Stage** changes for the next commit.
- `git commit -m "msg"` — **Commit** the staged changes to history.
- `git push` — **Upload** local commits to the remote server.

## Syncing & Inspection
- `git fetch` — Download history from remote without changing local files.
- `git pull` — **Download + Integrate** (Fetch + Merge) remote changes.
- `git status` — See which files are staged, unstaged, or untracked.
- `git clone [url]` — Create a local copy of a remote repository.

## Inspecting Changes Before Pushing
* **List Commits:** `git log origin/main..HEAD --oneline` (Shows titles of commits waiting to be pushed).
* **View Code Diff:** `git diff origin/main..HEAD` (Shows exact line changes).
* **Navigation:** If the screen gets stuck in a list, press **`q`** to quit the pager and return to the terminal.

## Troubleshooting Divergent Branches
* **Scenario:** You edited the README on GitHub and made local commits. Git prevents pushing because histories have diverged.
* **The Fix:** 1. Set merge preference: `git config pull.rebase false`
    2. Pull remote changes: `git pull origin main`
    3. Resolve any conflicts, then `git push`.

## Best Practices
 **Setup:**
    - `git config --global user.name "Your Name"`
    - `git config --global user.email "you@example.com"`