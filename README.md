# ARTECHE TERMINAL
### Financial market intelligence · Grupo Arteche

Arteche Terminal is a responsive financial dashboard covering global fiat references, Argentine FX markets and the top 250 cryptoassets by market capitalization. It combines market context, charting, conversion tools and personal price monitoring in one interface.

**Live demo:** https://institutocabildo-ui.github.io/arteche-cotiza/

## Product modules

- **Market desk:** Bitcoin and Argentine dollar views, market ticker and live reference cards.
- **Mercosur dashboard:** ARS, BRL, PYG, UYU and BOB references; Argentina's blue and official rates are kept distinct. Membership status is explained separately.
- **Europe dashboard:** EUR and selected European national currencies with daily reference rates.
- **Political radar and in-page news:** GDELT DOC 2.0 feeds for politics, commodities, energy, markets and crypto; refreshed every 10 minutes while the page is open. Headlines link to original publishers; the page does not generate investment advice.
- **Global FX:** daily USD reference rates for EUR, BRL, CNY, GBP, JPY, CHF, CAD, AUD, CLP, UYU, MXN, COP, PEN, PYG, BOB, ZAR, INR, SGD, HKD, KRW, TRY, SEK, NOK, DKK, PLN, THB, IDR and NZD through Frankfurter (ECB reference data).
- **Crypto market:** up to 250 leading cryptoassets by market capitalization through CoinGecko, with search, USD price, 24-hour change, market cap and volume.
- **TradingView charts:** embedded BTC/USDT and USD/ARS reference charts. USD/ARS is not the blue, MEP or CCL exchange rate.
- **FX dashboard:** official, blue, MEP, CCL, wholesale and card references when the upstream source returns them.
- **Historical chart:** Bitcoin history through CoinGecko and daily FX history through Dólar Claro. If a provider is unavailable, the chart reports that no data is available instead of drawing simulated values.
- **Currency converter:** directional buy/sell quote logic for ARS↔USD and reference conversion with BTC.
- **Market comparison:** percentage differences against the official dollar, calculated from reported sell prices.
- **Price alerts:** browser-local thresholds checked during periodic refreshes while the page remains open. Alerts are not a server-side or guaranteed push-notification service.
- **Market context:** curated external news-source links; the terminal does not fabricate headlines.

## Integrated financial suite

- **Arteche Bonos (demo):** calculator for current yield, approximate yield to maturity and price/parity using user-entered instrument terms. No unverified bond quotes are presented.
- **Arteche Activos (demo):** local portfolio tracker using quantities and reference prices entered by the user.
- **Arteche Wallet (demo):** local multi-currency balances for USD, ARS, EUR, CNY, GBP, JPY, CHF, BRL, BTC and USDT; simulated deposits, withdrawals and conversions only. No custody, bank or exchange connection.
- **Arteche Intelligence (observation):** separates intraday and multi-day analysis status; does not place orders or promise returns.
- **Profit Lock (demo):** accounting simulation for separating realized gains from operating capital; does not move funds.

## Data providers and attribution

- Argentine current quotes: DólarAPI.
- International fiat reference rates: Frankfurter API / European Central Bank reference rates; daily reference, not intraday dealing prices.
- Crypto market list: CoinGecko `/coins/markets` endpoint.
- Argentine historical series: Dólar Claro / ArgentinaDatos. Dólar Claro requires visible attribution and a link when its data is displayed.
- Bitcoin current and historical data: CoinGecko. Historical charts display provider attribution.
- Embedded charts: TradingView.

Each provider has its own availability, rate limits, refresh frequency, license and commercial-use terms. **The right to use Arteche Terminal does not include a right to resell, redistribute, sublicense or proxy third-party data or API access.** A commercial deployment must review provider terms and secure any required commercial data permissions.

## Technology

Static HTML, CSS and JavaScript. Google sign-in UI is wired for Firebase Authentication, but live authentication requires a Firebase project, enabled Google provider, authorized GitHub Pages domain and the real web-app config in `firebase-config.js`. This repository does not contain credentials. Activity points remain device-local in this beta and are partitioned by signed-in UID; they are not cloud-synced yet. No trades are executed, no funds are held and no brokerage service is provided.

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

Market data is indicative and may be delayed, incomplete or unavailable. News aggregation uses GDELT DOC 2.0 and depends on its indexing coverage, query limits and availability. The dashboard is informational only and is not investment, legal or tax advice. Always verify prices, costs and execution conditions with the relevant provider before transacting.
