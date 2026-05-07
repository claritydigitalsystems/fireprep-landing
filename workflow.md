# Git Workflow — fireprep-landing

Personal reference for branch-based development on this repo. Written for solo work with AI assistance.

---

## Mental model

- `main` is the production branch. Vercel deploys from `main` to the live site.
- All work happens on a feature branch (e.g. `hero-revision`, `add-faq-section`).
- When the work is good, the feature branch merges into `main` via a GitHub pull request.
- Vercel auto-deploys preview URLs for non-main branches — test there before merging.

```
main           ●───●───●───●─────────●  (live site)
                        \           /
hero-revision            ●───●───●─    (work-in-progress)
```

---

## The standard cycle

Run these in order every time you start work.

### 1. Make sure main is current

```bash
cd /Users/scottshimala/fireprep-landing
git checkout main
git pull
```

### 2. Create a new branch for the change

```bash
git checkout -b descriptive-branch-name
```

Naming: short, hyphenated, describes the work. Examples: `hero-revision`, `add-faq-section`, `fix-mobile-nav`. Avoid generic names like `update` or `v2`.

### 3. Make changes

Edit files. Run `npm run dev` to test locally on `localhost:3000`.

### 4. Check what changed

```bash
git status      # list of modified/added/deleted files
git diff        # actual line-by-line changes (press q to exit)
```

### 5. Stage and commit

```bash
git add .
git commit -m "Clear description of what changed"
```

Commit messages describe *what* changed in plain language. "Update hero copy to outcome-led headline" beats "fix stuff."

### 6. Push to GitHub

```bash
git push -u origin descriptive-branch-name    # first push only
git push                                       # every push after
```

The `-u origin <branch>` on the first push sets up tracking, so later pushes don't need arguments.

Vercel will create a preview deployment automatically. Find the URL in the Vercel dashboard or in the GitHub PR (next step).

### 7. Open a pull request on GitHub

- Go to the repo on github.com
- Banner appears: "descriptive-branch-name had recent pushes. Compare & pull request." Click it.
- Review the diff one more time.
- Click "Create pull request."
- Once everything looks good and the Vercel preview deployment looks correct, click "Merge pull request" → "Confirm merge."

GitHub merges into `main`. Vercel auto-deploys to the live site.

### 8. Clean up

After merging:

```bash
git checkout main
git pull
git branch -d descriptive-branch-name                 # delete locally
git push origin --delete descriptive-branch-name      # delete on GitHub
```

Then start the next change at step 2 with a fresh branch.

---

## Defaults to live by

1. **Never commit directly to `main`.** Always work on a branch.
2. **One branch per logical change.** Don't pile unrelated work into one branch.
3. **Merge via GitHub PR**, not `git merge` in the terminal. PRs catch mistakes.
4. **Pull before you start work**, push after every meaningful save point.
5. **If unsure what state you're in**, run `git status` and `git branch`.

---

## Common situations

### "I made changes but I'm on the wrong branch"

If you haven't committed yet:

```bash
git stash                          # temporarily save changes
git checkout correct-branch
git stash pop                      # bring changes back
```

### "I want to undo the last commit (but keep the changes)"

```bash
git reset --soft HEAD~1
```

Files stay modified, commit is removed. You can re-stage and re-commit.

### "I want to throw away all my local changes"

```bash
git checkout .                     # discards unstaged changes
git reset --hard HEAD              # discards everything back to last commit
```

Destructive — only use when you're sure.

### "I want to see what a specific commit changed"

```bash
git log --oneline                  # list of recent commits
git show <commit-hash>             # full diff for one commit
git show --stat <commit-hash>      # just files + line counts (no diff)
```

Add `--no-pager` before `show` if the pager traps you. Press `q` to exit if it does.

### "Vercel deployed but the live site looks wrong"

- Check which branch Vercel's "Production" deployment is set to (should be `main`).
- Hard refresh in the browser (Cmd+Shift+R) — old CSS may be cached.
- Check Vercel's deployment logs for build errors.

---

## Glossary

- **Branch** — a labeled pointer to a sequence of commits. Lets you work on parallel versions of the code.
- **Commit** — a snapshot of your changes with a message. Each commit has a unique hash.
- **Push** — send your local commits up to GitHub.
- **Pull** — bring down commits from GitHub that aren't local yet.
- **Merge** — combine the commits from one branch into another.
- **Pull request (PR)** — a proposal on GitHub to merge one branch into another, with a review interface.
- **Origin** — the default name for the GitHub-hosted version of the repo.
- **HEAD** — pointer to your current commit on your current branch.⏺ Bash(git push -u origin landing-copy-pass)                                                                                                                                            
  ⎿  Everything up-to-date                                  
     branch 'landing-copy-pass' set up to track 'origin/landing-copy-pass'.                                                                                                             
                                          
⏺ Already up to date — tracking was confirmed.                                                                                                                                          