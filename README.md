# Arteche Cotiza

**Market data and financial reference dashboard by Grupo Arteche.**

Arteche Cotiza centralizes reference quotes for the Argentine market and selected digital assets in a responsive web interface.

## Product scope
- Argentine FX references: official, blue, MEP, CCL, wholesale and card rates when the upstream source provides them.
- Selected cryptoasset prices and 24-hour variation.
- Market charts and source attribution.
- Last-update timestamps and visible unavailable/stale-data states.
- Responsive layout and installable PWA experience.

## Data integrity
Every displayed value must be traceable to a provider and its update time. Missing values must remain missing; the application must never fabricate buy/sell prices or timestamps. Provider outages, rate limits and schema changes must be surfaced clearly.

## Current development status
Prototype under active development. Provider response schemas, freshness and browser CORS behavior must be verified before treating the dashboard as production-ready.

## Run locally
Serve the repository root with any static HTTP server. No build step is required for the static prototype.

## Planned sources
- Argentine FX: Dólar Claro public API (response schema and availability require live validation).
- Cryptoassets: CoinGecko public API (subject to provider limits and terms).
- Charts: TradingView embed.

## Disclaimer
Market information is for informational purposes only and is not investment advice. Always verify prices with the relevant broker or market source before transacting.
