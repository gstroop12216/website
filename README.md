# Girl Scout Troop 12216

A Node.js redesign of the original Troop 12216 site. It retains its original pages, details, and outbound links.

Run locally with `npm start`, then open http://localhost:3000.

## Live calendar data while developing

To have the local site display the same events as production, pull the production Vercel environment variables into an ignored local file, then restart the server:

```sh
vercel env pull .env.local --environment=production
npm start
```

`BLOB_READ_WRITE_TOKEN` is used only to read `data/events.json` from the live Vercel Blob store. Without it, local development continues to use `data/events.json`.