# Glasshouse Deployment

## Current Status
✓ Glasshouse L0→L3 complete build
✓ Server running locally on port 3000
✓ Ready for production deployment

## Local Testing
```bash
npm install
npm start
# Open http://localhost:3000
```

## Deploy to Railway (Recommended)

1. Create account at https://railway.app
2. Connect your GitHub repository
3. Select branch: `claude/glasshouse-merge-design-reveal-pe4bcb`
4. Railway auto-deploys — generates public URL

## Deploy to Vercel

1. https://vercel.com/new
2. Import Git repository
3. Framework: Node.js
4. Run command: `npm start`
5. Deploy

## What's Deployed

- L0: Personalisation with editable weights
- L1: 100 ranked properties using fitFor formula
- L2: Reel navigation (prev/next through properties)
- Checkout: Shortlist review
- L3: 4-tab decision interface (Decision/Property/Neighbourhood/Future)

## Full Flow
L0 (preferences) → L1 (ranking) → L2 (reel) → Checkout → L3 (decision verdicts)

## Self-Contained
- No external API calls
- Deterministic inventory
- Works offline
- Preserved ranking formula
