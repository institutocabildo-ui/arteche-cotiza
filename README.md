# ARTECHE TERMINAL
### Financial market intelligence · Grupo Arteche

Arteche Terminal is a responsive financial dashboard covering global fiat references, Argentine FX markets and the top 250 cryptoassets by market capitalization. It combines market context, charting, conversion tools and personal price monitoring in one interface.

**Live demo:** https://institutocabildo-ui.github.io/arteche-cotiza/

## Product modules

- **Market desk:** Bitcoin and Argentine dollar views, market ticker and live reference cards.
- **Global FX:** daily USD reference rates for EUR, BRL, CNY, GBP, JPY, CHF, CAD, AUD, CLP, UYU, MXN, COP, PEN, PYG, BOB, ZAR, INR, SGD, HKD, KRW, TRY, SEK, NOK, DKK, PLN, THB, IDR and NZD through Frankfurter (ECB reference data).
- **Crypto market:** up to 250 leading cryptoassets by market capitalization through CoinGecko, with search, USD price, 24-hour change, market cap and volume.
- **TradingView charts:** embedded BTC/USDT and USD/ARS reference charts. USD/ARS is not the blue, MEP or CCL exchange rate.
- **FX dashboard:** official, blue, MEP, CCL, wholesale and card references when the upstream source returns them.
- **Historical chart:** Bitcoin history through CoinGecko and daily FX history through Dólar Claro. If a provider is unavailable, the chart reports that no data is available instead of drawing simulated values.
- **Currency converter:** directional buy/sell quote logic for ARS↔USD and reference conversion with BTC.
- **Market comparison:** percentage differences against the official dollar, calculated from reported sell prices.
- **Price alerts:** browser-local thresholds checked during periodic refreshes while the page remains open. Alerts are not a server-side or guaranteed push-notification service.
- **Market context:** curated external news-source links; the terminal does not fabricate headlines.

## Data providers and attribution

- Argentine current quotes: DólarAPI.
- International fiat reference rates: Frankfurter API / European Central Bank reference rates; daily reference, not intraday dealing prices.
- Crypto market list: CoinGecko `/coins/markets` endpoint.
- Argentine historical series: Dólar Claro / ArgentinaDatos. Dólar Claro requires visible attribution and a link when its data is displayed.
- Bitcoin current and historical data: CoinGecko. Historical charts display provider attribution.
- Embedded charts: TradingView.

Each provider has its own availability, rate limits, refresh frequency, license and commercial-use terms. **The right to use Arteche Terminal does not include a right to resell, redistribute, sublicense or proxy third-party data or API access.** A commercial deployment must review provider terms and secure any required commercial data permissions.

## Technology

Static HTML, CSS and JavaScript. No backend or user account is required for the current prototype. User preferences and alerts are stored locally in the browser. No trades are executed, no funds are held and no brokerage service is provided.

## Commercial model

Grupo Arteche retains ownership of the Arteche Terminal source code, product identity and original design, subject to third-party components and data-provider rights. Commercial customers may receive a **limited commercial-use license** under a separate written agreement. The agreement must define permitted deployment, users, territory, term, support, customization, branding, restrictions and fees. No transfer of ownership or exclusive rights is implied.

## Production-readiness checklist

Before a customer deployment:
1. Verify all provider endpoints, response schemas, freshness and rate limits in the target environment.
2. Confirm commercial permissions for every data source and embedded chart.
3. Add a server-side data layer if higher reliability, caching or multiple customer deployments are required.
4. Add monitoring, error reporting, accessibility checks and cross-browser/mobile QA.
5. Define the customer license and support scope in writing.
6. Do not market the current static prototype as an execution platform, investment recommendation service or guaranteed real-time institutional feed.

## Local preview

Serve the repository root using any static HTTP server. There is no build step.

## Disclaimer

Market data is indicative and may be delayed, incomplete or unavailable. The dashboard is informational only and is not investment, legal or tax advice. Always verify prices, costs and execution conditions with the relevant provider before transacting.
