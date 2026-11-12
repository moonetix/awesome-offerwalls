# Awesome Offerwalls

[![Links](https://github.com/moonetix/awesome-offerwalls/actions/workflows/ci.yml/badge.svg)](https://github.com/moonetix/awesome-offerwalls/actions/workflows/ci.yml)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey.svg)](LICENSE)
[![Maintained by Moonetix](https://img.shields.io/badge/maintained%20by-Moonetix-004ABB)](https://moonetix.com)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> A curated list of offerwall networks, SDKs, integration guides, free tools, platform rules, and postback security resources for publishers who reward users with their own currency.

An offerwall is a page or screen inside your app, site, bot, or game where users complete offers (install and reach a level, sign up, finish a survey) and earn your currency: coins, points, gems or credits. The network pays you for each completed offer and tells your server through a signed postback. This list collects what you need to pick a network, integrate it safely, and stay within the rules of the platforms you publish on.

Links go to official pages. Descriptions are short and neutral. Corrections and additions are welcome: see [Contributing](#contributing).

## Contents

- [Start here](#start-here)
- [Offerwall networks](#offerwall-networks)
- [SDKs and integrations](#sdks-and-integrations)
- [Guides](#guides)
  - [Basics](#basics)
  - [Integration by stack](#integration-by-stack)
  - [Rewards, currency and earnings](#rewards-currency-and-earnings)
  - [Traffic quality](#traffic-quality)
- [Free tools](#free-tools)
- [Platform rules](#platform-rules)
- [Postback and security](#postback-and-security)
- [Contributing](#contributing)
- [License](#license)

## Start here

New to offerwalls? These five pages cover most of what you need on day one.

- [What is an offerwall?](https://moonetix.com/academy/glossary/what-is-an-offerwall) - The concept, who pays whom, and where it fits.
- [Offerwall integration: iframe, link or API?](https://moonetix.com/academy/publisher-basics/offerwall-iframe-vs-api) - Pick the integration that fits your product.
- [Postback security](https://moonetix.com/academy/traffic-quality/postback-security) - The checks every reward endpoint needs.
- [Offerwall Link Builder](https://moonetix.com/tools/offerwall-link-builder) - Build a signed offerwall link and see the exact URL your server should produce.
- [Test your app before launch](https://moonetix.com/academy/integrations/test-your-app-before-launch) - A checklist for links, postbacks, and reversals before real users arrive.

## Offerwall networks

- [Moonetix](https://moonetix.com) - Affiliate network with a hosted offerwall (link, iframe, floating button), an Offers API, and SDKs for Android, iOS, Flutter, React Native and Unity.
- [AdGem](https://adgem.com) - Offerwall and rewarded video ad units for app publishers.
- [adjoe Playtime](https://adjoe.io/solutions/monetize-your-app/playtime/) - Offerwall that rewards users for the time they spend in advertised apps.
- [BitLabs](https://bitlabs.ai) - Rewarded surveys, games, shopping and offers for apps and websites, part of Prodege.
- [CPX Research](https://www.cpx-research.com) - Paid survey wall for apps and websites.
- [Hang My Ads](https://hangmyads.com) - Performance advertising agency with a mobile offerwall and an API for publishers.
- [Lootably](https://lootably.com) - Rewards-based monetization for mobile app and web publishers.
- [Monlix](https://monlix.com) - Offerwall with games, videos, offers and surveys shown inside apps and websites.
- [PubScale](https://pubscale.com) - Growth and monetization platform that includes an offerwall product.
- [Tapjoy](https://unity.com/products/tapjoy) - In-app rewarded offerwall, now part of Unity.
- [TheoremReach](https://theoremreach.com) - Rewarded surveys and offers for websites and mobile apps.
- [TimeWall](https://timewall.io) - Survey and micro task offerwall for websites and apps.
- [Torox](https://torox.io) - Offerwall and rewarded traffic network for apps, games and rewards sites, formerly OfferToro.
- [Upwall](https://upwall.io) - Hosted offerwall link and an Offers API for native integrations.
- [Wannads](https://wannads.com) - Offerwall and mobile SDK for apps, games and websites.

## SDKs and integrations

Official Moonetix docs for each integration. All of them use the same app keys and postback URL.

- [Offerwall link, iframe and floating button](https://docs.moonetix.com/offerwall-link) - Signed link format, iframe embed, and the embed.js Earn button.
- [Offers API](https://docs.moonetix.com/offers-api) - Fetch offers as JSON and build your own offer list.
- [Reporting API](https://docs.moonetix.com/reporting-api) - Pull your statistics into your own dashboards.
- [Android SDK](https://docs.moonetix.com/android-sdk) - Native offerwall for Android apps.
- [iOS SDK](https://docs.moonetix.com/ios-sdk) - Native offerwall for iOS apps.
- [Flutter plugin](https://docs.moonetix.com/flutter-sdk) - One plugin for Android and iOS.
- [React Native package](https://docs.moonetix.com/react-native-sdk) - Offerwall for React Native apps.
- [Unity plugin](https://docs.moonetix.com/unity-sdk) - Offerwall for Unity games.
- [WordPress plugin](https://docs.moonetix.com/wordpress) - Offerwall shortcode, block, and a built-in points balance.
- [AI agent setup](https://docs.moonetix.com/ai-agent-setup) - Point a coding agent at the docs ([llms.txt](https://docs.moonetix.com/llms.txt)).

Open source starters:

- [offerwall-nextjs-starter](https://github.com/moonetix/offerwall-nextjs-starter) - Next.js App Router: signed link, Earn page, verified postback route.
- [offerwall-laravel](https://github.com/moonetix/offerwall-laravel) - Laravel app with an Earn page and a postback route that credits each offer once.
- [offerwall-django](https://github.com/moonetix/offerwall-django) - Django app with an Earn page and a postback view that credits each offer once.
- [telegram-mini-app-offerwall](https://github.com/moonetix/telegram-mini-app-offerwall) - Offerwall inside a Telegram Mini App.
- [discord-rewards-bot](https://github.com/moonetix/discord-rewards-bot) - Discord bot that credits completed offers.
- [moonetix-offerwall-wordpress](https://github.com/moonetix/moonetix-offerwall-wordpress) - WordPress plugin source.
- [offerwall-express](https://github.com/moonetix/offerwall-express) - Express 5 on Node 22: signed link, `node:sqlite` ledger, postbacks credited once.

## Guides

From [Moonetix Academy](https://moonetix.com/academy).

### Basics

- [How the offerwall works](https://moonetix.com/academy/publisher-basics/how-the-offerwall-works) - What users see and what happens after they finish an offer.
- [Create your first app](https://moonetix.com/academy/publisher-basics/create-your-first-app) - From sign-up to a working offerwall link.
- [Set up your app currency](https://moonetix.com/academy/publisher-basics/set-up-app-currency) - Currency name, conversion rate and rounding.
- [Offerwall placement](https://moonetix.com/academy/monetization/offerwall-placement) - Where to put the wall so users find it.
- [Survey wall vs offerwall](https://moonetix.com/academy/monetization/survey-wall-vs-offerwall) - How the two formats differ.
- [Offerwall vs rewarded video](https://moonetix.com/academy/monetization/offerwall-vs-rewarded-video) - When to use each, and using both.

### Integration by stack

- [Next.js and React](https://moonetix.com/academy/integrations/nextjs-react-offerwall)
- [Vue and Nuxt](https://moonetix.com/academy/integrations/vue-nuxt-offerwall)
- [PHP and Laravel](https://moonetix.com/academy/integrations/offerwall-php-laravel)
- [WordPress](https://moonetix.com/academy/integrations/offerwall-wordpress)
- [Android (Kotlin)](https://moonetix.com/academy/integrations/android-offerwall-kotlin)
- [iOS (Swift)](https://moonetix.com/academy/integrations/ios-offerwall-swift)
- [Flutter](https://moonetix.com/academy/integrations/flutter-offerwall)
- [React Native](https://moonetix.com/academy/integrations/react-native-offerwall)
- [Unity](https://moonetix.com/academy/integrations/unity-offerwall)
- [Godot](https://moonetix.com/academy/integrations/godot-offerwall)
- [Offerwall in a WebView](https://moonetix.com/academy/integrations/offerwall-in-webview)
- [Telegram Mini App](https://moonetix.com/academy/integrations/telegram-mini-app-offerwall)
- [Discord bot](https://moonetix.com/academy/integrations/discord-bot-offerwall)
- [Chrome extension](https://moonetix.com/academy/integrations/chrome-extension-offerwall)
- [Electron](https://moonetix.com/academy/integrations/electron-offerwall)
- [Custom offerwall with the Offers API](https://moonetix.com/academy/integrations/build-custom-offerwall-api)
- [Floating Earn button](https://moonetix.com/academy/integrations/floating-earn-button)

### Rewards, currency and earnings

- [Virtual currency exchange rate](https://moonetix.com/academy/monetization/virtual-currency-exchange-rate) - Pricing coins against dollars.
- [Virtual economy design](https://moonetix.com/academy/monetization/virtual-economy-design) - Sinks, sources and balance.
- [Reward hold periods](https://moonetix.com/academy/monetization/reward-hold-periods) - Holding rewards before cash-out to absorb reversals.
- [How offerwall payouts are calculated](https://moonetix.com/academy/earnings/how-offerwall-payouts-are-calculated) - From advertiser payout to user reward.
- [Publisher earnings and reversals](https://moonetix.com/academy/earnings/publisher-earnings-and-reversals) - What a reversal does to your balance.
- [Why users do not finish offers](https://moonetix.com/academy/monetization/why-users-dont-finish-offers) - Common causes and fixes.
- [reward-economy-kit](https://github.com/moonetix/reward-economy-kit) - Integer-only payout to points math, reversals and cash-out pricing for JavaScript and PHP.
- [country-tiers](https://github.com/moonetix/country-tiers) - Tier 1, 2 and 3 country lists as JSON and CSV with ISO codes and World Bank income groups.
- [referral-engine](https://github.com/moonetix/referral-engine) - Referral codes, attribution and a commission ledger that survives clawbacks, in JavaScript and PHP.
- [gamification-kit](https://github.com/moonetix/gamification-kit) - Streaks, XP levels, quests and leaderboards that stay correct across time zones and DST.

### Traffic quality

- [Traffic quality rules](https://moonetix.com/academy/traffic-quality/traffic-quality-rules) - What counts as valid traffic.
- [Stop multi-accounting and VPN abuse](https://moonetix.com/academy/traffic-quality/stop-multi-accounting-vpn-abuse)
- [Stop fake sign-ups on a rewards site](https://moonetix.com/academy/traffic-quality/stop-fake-signups-rewards-site)
- [Prevent referral fraud](https://moonetix.com/academy/traffic-quality/prevent-referral-fraud)
- [Promote your offerwall within the rules](https://moonetix.com/academy/traffic-quality/promote-your-offerwall-rules)
- [offerwall-fraud-playbook](https://github.com/moonetix/offerwall-fraud-playbook) - Vendor-neutral fraud playbook for rewards publishers, with tested SQL, Node.js and PHP.
- [datacenter-ip-ranges](https://github.com/moonetix/datacenter-ip-ranges) - Cloud, hosting and CDN IP ranges from official provider feeds, rebuilt daily.
- [signup-guard](https://github.com/moonetix/signup-guard) - Explainable sign-up risk checks for Node.js and PHP: disposable emails, email normalization, datacenter and Tor IPs.

## Free tools

Browser-based calculators and checkers at [moonetix.com/tools](https://moonetix.com/tools). No sign-up needed.

- [Offerwall Link Builder](https://moonetix.com/tools/offerwall-link-builder) - Signed offerwall URL, HMAC hash, iframe and Earn button code.
- [Postback Hash Checker](https://moonetix.com/tools/postback-hash-checker) - Check a postback signature and find out why it does not match.
- [Offerwall Earnings Calculator](https://moonetix.com/tools/offerwall-earnings-calculator) - Monthly and yearly revenue from your users, open rate, and payouts.
- [Virtual Currency Calculator](https://moonetix.com/tools/virtual-currency-calculator) - Coins per dollar, user split, rounding, and the reward users will see.
- [Rewards Site Profit Calculator](https://moonetix.com/tools/rewards-site-profit-calculator) - Profit after user rewards, cash-out fees, reversals, and running costs.
- [EPC Calculator](https://moonetix.com/tools/epc-calculator) - Earnings per click, conversion rate, and average payout per conversion.
- [eCPM and RPM Calculator](https://moonetix.com/tools/ecpm-calculator) - eCPM, page RPM, and revenue per 1,000 users.
- [ARPDAU Calculator](https://moonetix.com/tools/arpdau-calculator) - Revenue per daily active user and DAU/MAU stickiness.
- [Retention Rate Calculator](https://moonetix.com/tools/retention-rate-calculator) - Day 1, day 7, and day 30 retention for one cohort.
- [LTV and CAC Calculator](https://moonetix.com/tools/ltv-calculator) - Lifetime value, LTV to CAC ratio, and payback in months.
- [Ad Revenue Calculator](https://moonetix.com/tools/ad-revenue-calculator) - Website ad earnings, impressions, and page RPM.
- [Telegram Channel Earnings Calculator](https://moonetix.com/tools/telegram-channel-earnings-calculator) - Channel income from sponsored posts and Telegram ad revenue sharing.
- [ROAS Calculator](https://moonetix.com/tools/roas-calculator) - Return on ad spend, break-even and target ROAS.
- [Cost per Result Calculator](https://moonetix.com/tools/cost-per-result-calculator) - Cost per lead, install, or sale, and the most you can afford to pay.
- [CPI Calculator](https://moonetix.com/tools/cpi-calculator) - Cost per install and the most you can pay per install.

## Platform rules

Read the official rules of every platform you publish on before you add rewards. In short: reward only completed offers, never reward ratings, reviews, joins, invites or likes, and keep users 16 or older.

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) - Rules for apps on the App Store, including ads, in-app purchases and incentives.
- [Google Play Developer Policy Center](https://play.google/developer-content-policy/) - All Google Play developer policies in one place.
  - [Ads policy](https://support.google.com/googleplay/android-developer/answer/9857753) - Rules for ads and rewarded formats in Play apps.
  - [Families policies](https://support.google.com/googleplay/android-developer/answer/9893335) - Extra rules for apps that target children.
- [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) - Rules for bots and apps on Discord.
- [Telegram Bot Platform Developer Terms of Service](https://telegram.org/tos/bot-developers) - Terms for bot developers.
- [Telegram Mini Apps Terms of Service](https://telegram.org/tos/mini-apps) - Terms for Mini Apps.
- [Minecraft End User License Agreement](https://www.minecraft.net/en-us/eula) - The license terms for the game, including rules for servers.
- [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines) - Rules for commercial use of the Minecraft name, brand and assets, including what you may charge for.

Related Moonetix guides: [offerwall rules for iOS apps](https://moonetix.com/academy/monetization/offerwall-ios-app-rules), [incentivized installs and Google Play policy](https://moonetix.com/academy/strategy/incentivized-installs-google-play-policy), [offerwall age rules](https://moonetix.com/academy/traffic-quality/offerwall-age-rules), [monetize a Minecraft server](https://moonetix.com/academy/monetization/monetize-minecraft-server).

## Postback and security

A postback is the server-to-server call that tells you a user completed an offer. Verify its signature, credit each transaction once, and handle reversals.

- [Moonetix postback docs](https://docs.moonetix.com/postbacks) - Macros, statuses, HMAC-SHA256 hash, retries.
- [Credits and reversals](https://docs.moonetix.com/credits-and-reversals) - The credit and reversal lifecycle of one transaction.
- [Postback security](https://moonetix.com/academy/traffic-quality/postback-security) - Why each check exists.
- [Prevent duplicate reward credits](https://moonetix.com/academy/integrations/prevent-duplicate-reward-credits) - Idempotent crediting by transaction ID.
- [Postback IP allowlist](https://moonetix.com/academy/integrations/postback-ip-allowlist) - An extra layer on top of the hash check.
- [Rotate your keys and link salt](https://moonetix.com/academy/integrations/rotate-keys-and-link-salt) - What to do if a secret leaks.
- [What is HMAC?](https://moonetix.com/academy/glossary/what-is-hmac) - The signature behind links and postbacks, in plain terms.
- Postback handlers by language: [Node.js](https://moonetix.com/academy/integrations/offerwall-postback-nodejs), [Python](https://moonetix.com/academy/integrations/offerwall-postback-python), [Go](https://moonetix.com/academy/integrations/offerwall-postback-go), [Java](https://moonetix.com/academy/integrations/offerwall-postback-java), [C#](https://moonetix.com/academy/integrations/offerwall-postback-csharp), [Rails](https://moonetix.com/academy/integrations/offerwall-postback-rails), [Firebase](https://moonetix.com/academy/integrations/offerwall-postback-firebase), [Supabase](https://moonetix.com/academy/integrations/offerwall-postback-supabase).

Open source handlers and starters (sibling repos):

- [offerwall-postback-handlers](https://github.com/moonetix/offerwall-postback-handlers) - Tested postback handlers in several languages.
- [postback-tester](https://github.com/moonetix/postback-tester) - Sends signed, replayed, reversed and forged test postbacks to your endpoint and reports which checks it passes.
- [affiliate-postback-macros](https://github.com/moonetix/affiliate-postback-macros) - Postback macros, signatures and reversal rules for tracking platforms and offerwall networks, with sources.
- [telegram-mini-app-offerwall](https://github.com/moonetix/telegram-mini-app-offerwall) - Telegram Mini App with a verified postback endpoint.
- [discord-rewards-bot](https://github.com/moonetix/discord-rewards-bot) - Discord bot with a verified postback endpoint.
- [offerwall-nextjs-starter](https://github.com/moonetix/offerwall-nextjs-starter) - Next.js postback Route Handler with pluggable storage.
- [moonetix-offerwall-wordpress](https://github.com/moonetix/moonetix-offerwall-wordpress) - WordPress plugin with a REST postback endpoint.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. In short: official links only, one neutral line per entry, placed next to related entries.

Every link is checked each Monday. Dead ones are listed in a single open issue until they are fixed.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, Moonetix has waived all copyright and related rights to this list. See [LICENSE](LICENSE).
