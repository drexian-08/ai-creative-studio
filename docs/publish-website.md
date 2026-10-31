# Publish the Studio as a website

A GitHub Pages workflow is included at `.github/workflows/pages.yml`. It builds a small static site with:
- Home page
- Studio Planner
- Mini Game

## One-time repository setting

The connected GitHub automation currently cannot enable Pages because the GitHub App does not have repository administration permission. A repository owner must enable it once:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Save if GitHub shows a save button.
5. Open the **Actions** tab and rerun the latest **Deploy AI Creative Studio to GitHub Pages** workflow.

Do not change the repository visibility just for this step. If GitHub says Pages is unavailable for this private repository or plan, keep it private and use the local ZIP workflow, or choose a hosting option that supports private-source deployment.

After a successful deployment, the site URL is normally:
`https://drexian-08.github.io/ai-creative-studio/`

The URL should be treated as live only after the deployment workflow succeeds.
