# Tanqory Mies Documentation Site - Claude Context

## Project Overview
- **Type**: Docusaurus 3.8.1 documentation site
- **Location**: `/docs/docusaurus-site/`
- **Dev Server**: `pnpm run dev --port 3020` (working port)
- **Status**: Ready for GitHub push and deployment

## Completed Features
- ✅ Dark theme customization (pure black #000000 background)
- ✅ Dual-theme logo system (tanqory-mies.svg + tanqory-mies-dark.svg)
- ✅ Custom navbar with Community/Support dropdowns
- ✅ Social icons (GitHub, Twitter, Discord)
- ✅ Interactive examples with live codeblock
- ✅ Mermaid diagrams support
- ✅ Comprehensive .gitignore (resolved 10k files issue)

## Current State
- **Git Status**: Clean (working tree clean)
- **Commits**: 2 commits ready
- **Files**: All properly ignored, no pending changes
- **Build**: Working on port 3020

## Known Issues
- Search functionality temporarily disabled (Algolia index errors)
- Need to setup remote origin for GitHub push

## Next Steps
1. Push to GitHub repository
2. Deploy to Vercel/Netlify/GitHub Pages
3. Setup Algolia search with public URL
4. Use "Crawl your website" option in Algolia

## Key File Locations
- Config: `docs/docusaurus-site/docusaurus.config.ts`
- Styles: `docs/docusaurus-site/src/css/custom.css`
- Logos: `docs/docusaurus-site/static/img/tanqory-mies*.svg`
- Content: `docs/docusaurus-site/docs/`

## Commands
- **Dev**: `cd docs/docusaurus-site && pnpm run dev --port 3020`
- **Build**: `cd docs/docusaurus-site && pnpm run build`
- **Git Status**: `git status`

## Settings for Future Sessions
- **Working Directory**: `/Users/pharinyaboonchai/AI_Demo/GitHub/tanqory-mies`
- **Main Dev Port**: 3020
- **Package Manager**: pnpm