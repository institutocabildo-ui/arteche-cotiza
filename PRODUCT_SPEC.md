# ARTECHE — Product specification

## Product promise
ARTECHE is a free financial utility platform for Android. All five modules are available without subscriptions or paywalls. Revenue may come from clearly labeled, relevant advertising and sponsorships; ads must never be disguised as market data or editorial content.

## 1. Mercados en vivo
- Currencies: USD, EUR, BRL and other useful FX pairs; show pair convention, source, last-updated time, and whether the quote is live, delayed, or daily reference.
- Crypto: broad market list with price, 24h change, volume and market cap where available.
- Equities and indices: searchable instruments and major global indices, with exchange, currency, trading status and delay clearly labeled.
- Watchlists and instrument detail pages with charts and historical ranges.
- Never label delayed or daily reference data as live.

## 2. ARTECHE RADAR
- Visual radar for notable price/volume/volatility moves across supported markets.
- Filters by asset class, market, time window and significance.
- Each signal explains what moved, by how much, over what period, source, timestamp and why it was flagged.
- Signals are research prompts, not personalized investment recommendations or promises of opportunity.
- Include false-positive controls, quiet states and transparent thresholds.

## 3. Mi cartera — alcancía de inversiones
- Manual entry of deposits/contributions, purchases, sales, withdrawals, fees and dividends/interest.
- Track holdings and cash balance by currency and account/portfolio.
- Calculate cost basis, realized/unrealized P&L and overall return where sufficient transaction and price data exists.
- Show transaction history, asset allocation and performance over time.
- Local-first storage initially; cloud sync/login only after secure backend and privacy design.
- Never fabricate valuations: show stale/missing price states and allow manual prices.

## 4. Laboratorio financiero
- Bond calculator: cash flows, yield/TIR, duration and amortization schedules.
- Compound interest, simple interest, inflation adjustment, currency conversion and savings/investment simulators.
- Inputs and assumptions visible; show formulas, periods, compounding frequency, fees/taxes exclusions and estimates.
- Validate calculations with automated tests and independent reference cases before professional claims.

## 5. Inteligencia económica
- News feed, economic calendar and important indicators.
- Language behavior: interface follows device/user language; news headlines and summaries remain in the original publisher language by default, with an optional "Traducir" action into the selected app language. Never silently mix languages or present a machine translation as the original.
- Calendar events show country/region, local event time, currency/indicator, previous/forecast/actual values when available, source and release status.
- News items retain publisher, original link, publication time and original language.
- Filters by country, region, asset class and topic.

## Global product requirements
- Free access to all five modules; no paid tier or locked features.
- Lightweight, accessible UI, responsive to low-end Android devices and small screens.
- Source and freshness metadata on market and calendar data.
- Clear offline, delayed-data, loading and error states.
- Privacy by design; no biometric collection required.
- Advertising must be clearly marked, relevant where possible, frequency-capped, and never interfere with core controls.
- Avoid claims of personalized financial advice. Distinguish factual data, calculations, editorial content and radar signals.

## Delivery sequence
1. Stabilize app shell and navigation; retain current Cotiza and Bonos tools while building the new destinations.
2. Build local-first portfolio ledger and tested financial calculators.
3. Add reliable market data adapters and watchlists with source/timestamp display.
4. Add explainable radar signals based on transparent thresholds.
5. Add multilingual news/calendar pipeline with original-language preservation and optional translation.
6. QA on low-end Android hardware, then store distribution and production ad configuration.

## Current implementation status (2026-11-24)
The existing prototype currently embeds the separate Cotiza and Bonos web apps. Google sign-in, push notifications, portfolio ledger, radar engine, economic calendar, and localized translation controls are not yet implemented. AdMob integration is under test using Google demo IDs only; it does not generate revenue until production account/app setup and approval are completed.
