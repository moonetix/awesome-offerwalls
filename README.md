# Awesome Offerwalls

[![Links](https://github.com/moonetix/awesome-offerwalls/actions/workflows/ci.yml/badge.svg)](https://github.com/moonetix/awesome-offerwalls/actions/workflows/ci.yml)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey.svg)](LICENSE)
[![Maintained by Moonetix](https://img.shields.io/badge/maintained%20by-Moonetix-004ABB)](https://moonetix.com)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> A curated list of offerwall networks, SDKs, integration guides, free tools, platform rules, and postback security resources for publishers who reward users with their own currency.

An offerwall is a page or screen inside your app, site, bot, or game where users complete offers (install and reach a level, sign up, finish a survey) and earn your currency: coins, points, gems or credits. The network pays you for each completed offer and tells your server through a signed postback. This list collects what you need to pick a network, integrate it safely, and stay within the rules of the platforms you publish on.

Links go to official pages. Descriptions are short and neutral. The list is maintained by Moonetix, an affiliate network, and its own guides and repositories are named as such. Corrections and additions are welcome: see [Contributing](#contributing).

## Contents

- [Start here](#start-here)
- [Offerwall networks](#offerwall-networks)
- [SDKs and integrations](#sdks-and-integrations)
  - [Docs by network](#docs-by-network)
  - [SDK repositories and sample apps](#sdk-repositories-and-sample-apps)
  - [Embedding a wall](#embedding-a-wall)
  - [Starter projects from Moonetix](#starter-projects-from-moonetix)
- [Guides](#guides)
  - [Basics](#basics)
  - [Rewards, currency and earnings](#rewards-currency-and-earnings)
  - [Traffic quality](#traffic-quality)
  - [Measurement and attribution](#measurement-and-attribution)
- [Free tools](#free-tools)
  - [Postback testing and debugging](#postback-testing-and-debugging)
  - [Calculators and link builders from Moonetix](#calculators-and-link-builders-from-moonetix)
- [Platform rules](#platform-rules)
- [Postback and security](#postback-and-security)
  - [Signatures and secrets](#signatures-and-secrets)
  - [Idempotency and retries](#idempotency-and-retries)
  - [Postback references by network](#postback-references-by-network)
  - [Handlers and references from Moonetix](#handlers-and-references-from-moonetix)
- [Contributing](#contributing)
- [License](#license)

## Start here

New to offerwalls? These five pages cover most of what you need on day one. Before you launch, read the [platform rules](#platform-rules) that apply to you.

- [What is an offerwall?](https://www.appsflyer.com/glossary/offerwall/) - AppsFlyer glossary entry on the format and how publishers earn from it.
- [What is a postback?](https://www.singular.net/glossary/postback/) - Singular glossary entry on the server call that reports a conversion.
- [Offerwall integration: iframe, link or API?](https://moonetix.com/academy/publisher-basics/offerwall-iframe-vs-api) - Moonetix guide to picking the integration that fits your product.
- [Best practices for using webhooks](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks) - GitHub's checklist for endpoints that receive server calls: a shared secret, HTTPS, quick responses and missed deliveries. Most of it applies to postbacks.
- [Test your app before launch](https://moonetix.com/academy/integrations/test-your-app-before-launch) - Moonetix checklist for links, postbacks, and reversals before real users arrive.

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

Where each network documents its integration, and platform references for showing a wall inside an app, site, bot or game.

### Docs by network

Public integration docs, A to Z.

- [AdGem docs](https://docs.adgem.com/) - Web offerwall, Offer API, SDKs for Android, iOS and Unity, and postbacks.
- [adjoe Playtime docs](https://docs.adjoe.io/) - Playtime SDKs for Android, iOS, Flutter, React Native and Unity, plus server-to-server payouts.
- [BitLabs docs](https://developer.bitlabs.ai/docs/getting-started) - SDKs for Android, iOS, Flutter, React Native and Unity, offer and survey APIs, and callbacks.
- [CPX Research docs](https://publisher.cpx-research.com/documentation) - Script tag integration of the survey wall on a website.
- [Hang My Ads offerwall docs](https://hangmyads.com/docs/offerwall.html) - Request parameters and the HTML and JSON responses of the offerwall.
- [Lootably docs](https://documentation.lootably.com/docs/getting-started-1) - Offerwall setup, Offers API, Reporting API, Android SDK and postbacks.
- [Monlix docs](https://docs.monlix.com/) - HTML5, Android and iOS integrations, offer and survey APIs, and postback parameters.
- [Moonetix docs](https://docs.moonetix.com/) - Signed link, iframe and floating button, Offers API, Reporting API, SDKs for Android, iOS, Flutter, React Native and Unity, and a WordPress plugin.
- [PubScale Offerwall SDK docs](https://pubscale.gitbook.io/offerwall-sdk/) - Android, iOS, Flutter, React Native, Unity and web integration, and server-to-server callbacks.
- [Tapjoy Offerwall docs](https://docs.unity.com/en-us/grow/offerwall) - SDKs for Android, iOS, Unity, Flutter and React Native, a web offerwall, and virtual currency setup.
- [TheoremReach publisher docs](https://docs.theoremreach.com/publisher) - Web, offerwall, API and SDK guides for rewarded surveys and offers.
- [Upwall docs](https://docs.upwall.net/) - Account setup, web offerwall, Offers API and postbacks.
- [Wannads docs](https://wannads.com/documentation/offerwall/html) - Iframe offerwall, API, Android and iOS SDKs, and postbacks.

### SDK repositories and sample apps

Official GitHub accounts of the networks that publish SDKs or sample apps, A to Z.

- [AdGem on GitHub](https://github.com/AdGem) - Android example app, iOS sample app, and SDK packages for Swift Package Manager and Unity.
- [adjoe on GitHub](https://github.com/adjoeio) - Playtime SDK wrappers for Flutter, React Native and Cordova, Swift packages and test apps.
- [BitLabs on GitHub](https://github.com/BitBurst-GmbH) - SDKs for Android, iOS, Flutter, React Native and Unity.
- [CPX Research on GitHub](https://github.com/MakeOpinionGmbH) - SDKs for Android, iOS, Flutter, React Native and Unity, with demo apps.
- [Tapjoy on GitHub](https://github.com/Tapjoy) - Flutter and React Native plugins and Swift packages.
- [TheoremReach on GitHub](https://github.com/TheoremReach) - SDKs for Android, iOS, Flutter, React Native and Unity.

### Embedding a wall

Platform references for the places a hosted wall is usually shown: a WebView or browser tab in a mobile app, an iframe on a site, a Telegram Mini App, a Discord bot, a browser extension or a desktop app.

- [Android WebView](https://developer.android.com/develop/ui/views/layout/webapps/webview) - Android guide to showing web content inside an app.
- [Android Custom Tabs](https://developer.chrome.com/docs/android/custom-tabs) - Opens a URL in the user's browser inside your app, without building a WebView.
- [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) - Apple's view for showing web content inside an iOS or macOS app.
- [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) - Shows a web page in a Safari-based view inside an iOS app.
- [webview_flutter](https://pub.dev/packages/webview_flutter) - WebView plugin for Flutter, published by the Flutter team.
- [react-native-webview](https://github.com/react-native-webview/react-native-webview) - WebView component for React Native on Android and iOS.
- [iframe element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe) - MDN reference for the iframe element, including the `sandbox` and `allow` attributes.
- [CSP frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) - MDN reference for the header directive that controls which sites may embed a page.
- [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) - MDN reference for messaging between an embedded page and the page around it.
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps) - Official developer docs, including how to validate the user data a Mini App receives.
- [Discord interactions](https://docs.discord.com/developers/interactions/overview) - How a Discord app receives commands, buttons and modals, and how to set up the endpoint.
- [Remote hosted code in Chrome extensions](https://developer.chrome.com/docs/extensions/develop/migrate/remote-hosted-code) - Why Manifest V3 extensions may not load remote code, and what to do instead.
- [Electron security](https://www.electronjs.org/docs/latest/tutorial/security) - Electron's checklist for loading remote content in a desktop app.

### Starter projects from Moonetix

Open source starters that build a signed offerwall link and credit each verified postback once. They target Moonetix, but the server side carries over to other networks.

- [offerwall-nextjs-starter](https://github.com/moonetix/offerwall-nextjs-starter) - Next.js App Router: signed link, Earn page, verified postback route.
- [offerwall-laravel](https://github.com/moonetix/offerwall-laravel) - Laravel app with an Earn page and a postback route.
- [offerwall-django](https://github.com/moonetix/offerwall-django) - Django app with an Earn page and a postback view.
- [offerwall-express](https://github.com/moonetix/offerwall-express) - Express 5 on Node 22 with a `node:sqlite` ledger.
- [telegram-mini-app-offerwall](https://github.com/moonetix/telegram-mini-app-offerwall) - Offerwall inside a Telegram Mini App.
- [discord-rewards-bot](https://github.com/moonetix/discord-rewards-bot) - Discord bot that credits completed offers.
- [More starters](https://github.com/moonetix) - Nuxt, React and Vite, Firebase, Supabase, WordPress, plain PHP, Flutter, React Native, Unity, Godot, Phaser, Chrome extension and Electron.

## Guides

### Basics

- [What is an offerwall?](https://adjoe.io/glossary/what-is-an-offerwall/) - adjoe glossary entry on the format and its role in ad monetization.
- [How the offerwall works](https://moonetix.com/academy/publisher-basics/how-the-offerwall-works) - Moonetix guide to what users see and what happens after they finish an offer.
- [Get started with Offerwall](https://docs.unity.com/en-us/grow/offerwall/monetization/getting-started/get-started-with-offerwall) - Tapjoy's overview of the pieces of an integration: virtual currencies, placements and messaging.
- [Monetization strategy planning](https://docs.unity.com/en-us/grow/offerwall/monetization/optimization/monetization-strategy) - Tapjoy's notes on audience, engagement goals and how to present the wall to users.
- [Offerwall placement](https://moonetix.com/academy/monetization/offerwall-placement) - Moonetix guide to where to put the wall so users find it.
- [Survey wall vs offerwall](https://moonetix.com/academy/monetization/survey-wall-vs-offerwall) - Moonetix guide to how the two formats differ.
- [What is a rewarded video ad?](https://www.singular.net/glossary/rewarded-video-ads/) - Singular glossary entry on the rewarded format that often runs next to an offerwall.
- [About Offerwall messages](https://support.google.com/admanager/answer/13860694) - Google's Offerwall for AdSense and Ad Manager, a different product that gates site content behind a choice such as a rewarded ad.

### Rewards, currency and earnings

- [Virtual currency overview](https://docs.unity.com/en-us/grow/offerwall/monetization/virtual-currency/virtual-currency-overview) - Tapjoy's comparison of a currency kept by the network and one kept on your own server.
- [Exchange rates](https://docs.unity.com/en-us/grow/offerwall/monetization/dashboard/exchange-rates) - Tapjoy's explanation of how much currency a user receives for every dollar you earn.
- [Virtual currency exchange rate](https://moonetix.com/academy/monetization/virtual-currency-exchange-rate) - Moonetix guide to pricing coins against dollars.
- [How offerwall payouts are calculated](https://moonetix.com/academy/earnings/how-offerwall-payouts-are-calculated) - Moonetix guide to the path from advertiser payout to user reward.
- [Reward hold periods](https://moonetix.com/academy/monetization/reward-hold-periods) - Moonetix guide to holding rewards before cash-out to absorb reversals.
- [Value chains](https://lostgarden.com/2021/12/12/value-chains/) - Daniel Cook's method for mapping and balancing the sources and sinks of a game economy.
- [Unity Economy](https://docs.unity.com/en-us/economy) - Unity's backend service for currencies, inventory items and purchases in a game.
- [reward-economy-kit](https://github.com/moonetix/reward-economy-kit) - Integer-only payout to points math, reversals and cash-out pricing for JavaScript and PHP, from Moonetix.
- [gamification-kit](https://github.com/moonetix/gamification-kit) - Streaks, XP levels, quests and leaderboards that stay correct across time zones and DST, from Moonetix.
- [referral-engine](https://github.com/moonetix/referral-engine) - Referral codes, attribution and a commission ledger that survives clawbacks, in JavaScript and PHP, from Moonetix.
- [World Bank Country and Lending Groups](https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups) - Income group of every economy, a common input for country tiers.
- [country-tiers](https://github.com/moonetix/country-tiers) - Tier 1, 2 and 3 country lists as JSON and CSV with ISO codes and World Bank income groups, from Moonetix.
- [PayPal Payouts](https://developer.paypal.com/payouts/use-payouts/overview) - PayPal API for sending money to many recipients at once.
- [Tango API](https://developers.tangocard.com/) - Digital gift card API for delivering rewards.
- [Tremendous API](https://developers.tremendous.com/docs/introduction) - API for sending rewards as gift cards, prepaid cards and bank or PayPal transfers.
- [Runa API](https://developer.runa.io/welcome) - Developer hub for building payout flows with the Runa API.

### Traffic quality

- [OWASP Automated Threats to Web Applications](https://owasp.org/projects/automated-threats-to-web-applications) - Catalog of automated abuse of valid site functions, such as mass account creation.
- [What is mobile ad fraud?](https://www.appsflyer.com/glossary/mobile-ad-fraud/) - AppsFlyer glossary entry on common fraud types in app advertising.
- [MRC standards and guidelines](https://mediaratingcouncil.org/standards-and-guidelines) - Media Rating Council documents, including the Invalid Traffic Detection and Filtration guidelines.
- [Traffic quality rules](https://moonetix.com/academy/traffic-quality/traffic-quality-rules) - Moonetix guide to what counts as valid traffic.
- [Stop multi-accounting and VPN abuse](https://moonetix.com/academy/traffic-quality/stop-multi-accounting-vpn-abuse) - Moonetix guide to duplicate accounts and masked locations.
- [offerwall-fraud-playbook](https://github.com/moonetix/offerwall-fraud-playbook) - Vendor-neutral fraud playbook for rewards publishers, with tested SQL, Node.js and PHP, from Moonetix.
- [Play Integrity API](https://developer.android.com/google/play/integrity) - Confirms requests come from your genuine app on a genuine Android device.
- [Establishing your app's integrity](https://developer.apple.com/documentation/devicecheck/establishing-your-app-s-integrity) - Apple's guide to App Attest, which confirms requests come from your genuine app.
- [Firebase App Check](https://firebase.google.com/docs/app-check) - Confirms backend requests come from your real app, using Play Integrity, App Attest or reCAPTCHA.
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) - CAPTCHA alternative that verifies visitors without puzzles.
- [hCaptcha](https://docs.hcaptcha.com/) - Developer guide for the hCaptcha bot check.
- [reCAPTCHA](https://developers.google.com/recaptcha) - Google's bot detection for websites and apps.
- [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) - Open source browser fingerprinting library.
- [signup-guard](https://github.com/moonetix/signup-guard) - Explainable sign-up risk checks for Node.js and PHP: disposable emails, email normalization, datacenter and Tor IPs, from Moonetix.
- [disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains) - Community-maintained list of disposable email domains.
- [GeoLite databases](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data/) - MaxMind's free IP geolocation and ASN databases.
- [lists_vpn](https://github.com/X4BNet/lists_vpn) - Automatically updated lists of VPN and data center IP ranges.
- [datacenter-ip-ranges](https://github.com/moonetix/datacenter-ip-ranges) - Cloud, hosting and CDN IP ranges from official provider feeds, rebuilt daily, from Moonetix.
- [Tor bulk exit list](https://check.torproject.org/torbulkexitlist) - Current Tor exit addresses as plain text, published by the Tor Project.

### Measurement and attribution

A network learns that a user finished an offer from the advertiser or its measurement partner. These references explain how installs and in-app events are attributed, which helps when a reward is missing or late.

- [What is mobile attribution?](https://www.appsflyer.com/glossary/mobile-attribution/) - AppsFlyer glossary entry on how installs and events are credited to a source.
- [What is an attribution window?](https://www.appsflyer.com/glossary/attribution-window/) - AppsFlyer glossary entry on the time span in which a click can be credited with a conversion.
- [What is an MMP?](https://www.singular.net/glossary/mobile-measurement-partner-mmp/) - Singular glossary entry on mobile measurement partners.
- [Server-to-server events](https://dev.adjust.com/en/api/s2s-api/events/) - Adjust API for sending in-app events from a server.
- [Google Play Install Referrer](https://developer.android.com/google/play/installreferrer) - API that returns the referral data of an install from Google Play.
- [Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248) - Play Console Help page on the Android advertising ID and the rules for using it.
- [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) - The iOS permission prompt required before tracking users across apps and websites.
- [AdAttributionKit](https://developer.apple.com/documentation/adattributionkit) - Apple's privacy-preserving ad attribution framework.
- [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) - Apple's install attribution API that preceded AdAttributionKit.

## Free tools

Free to use, or with a free tier.

### Postback testing and debugging

- [Webhook.site](https://webhook.site/) - Gives you a unique URL and shows every request sent to it.
- [webhook-tester](https://github.com/tarampampam/webhook-tester) - Self-hosted open source tool that captures and displays incoming requests.
- [smee.io](https://smee.io/) - Forwards payloads from a public URL to a server on your machine.
- [ngrok](https://ngrok.com/) - Tunnel that puts a local server on a public HTTPS URL.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare Tunnel client, which exposes a local server through Cloudflare.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Open source tunnel that gives a local server a public URL.
- [Hookdeck CLI](https://github.com/hookdeck/hookdeck-cli) - Forwards webhooks to localhost and lets you replay them.
- [Hoppscotch](https://hoppscotch.io/) - Open source API client for sending test requests from the browser.
- [CyberChef](https://gchq.github.io/CyberChef/) - Browser tool with HMAC and hash operations, for checking a signature by hand.
- [mitmproxy](https://www.mitmproxy.org/) - Interactive HTTPS proxy for inspecting what an app or WebView sends.
- [postback-tester](https://github.com/moonetix/postback-tester) - Sends signed, replayed, reversed and forged test postbacks to your endpoint and reports which checks it passes, from Moonetix.

### Calculators and link builders from Moonetix

Browser-based, no sign-up needed. More calculators are at [moonetix.com/tools](https://moonetix.com/tools).

- [Offerwall Link Builder](https://moonetix.com/tools/offerwall-link-builder) - Signed offerwall URL, HMAC hash, iframe and Earn button code.
- [Postback Hash Checker](https://moonetix.com/tools/postback-hash-checker) - Check a postback signature and find out why it does not match.
- [Offerwall Earnings Calculator](https://moonetix.com/tools/offerwall-earnings-calculator) - Monthly and yearly revenue from your users, open rate, and payouts.
- [Virtual Currency Calculator](https://moonetix.com/tools/virtual-currency-calculator) - Coins per dollar, user split, rounding, and the reward users will see.

## Platform rules

Read the official rules of every platform you publish on before you add rewards. In short: reward only completed offers, never reward ratings, reviews, joins, invites or likes, and keep users 16 or older.

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) - Rules for apps on the App Store, including ads, in-app purchases and incentives.
- [Apple User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/) - When an app must ask for permission to track.
- [Google Play Developer Policy Center](https://play.google/developer-content-policy/) - All Google Play developer policies in one place.
  - [Ads policy](https://support.google.com/googleplay/android-developer/answer/9857753) - Rules for ads and rewarded formats in Play apps.
  - [Families policies](https://support.google.com/googleplay/android-developer/answer/9893335) - Extra rules for apps that target children.
  - [User Ratings, Reviews, and Installs policy](https://support.google.com/googleplay/android-developer/answer/9898684) - Prohibits manipulating ratings, reviews and install counts, including through incentives.
- [AdMob policies for ad units that offer rewards](https://support.google.com/admob/answer/7313578) - What may be offered as a reward for an ad, and what must be disclosed first.
- [AdSense Program policies](https://support.google.com/adsense/answer/48182) - Rules for AdSense publishers, including the ban on incentivized clicks.
- [Chrome Web Store Program Policies](https://developer.chrome.com/docs/webstore/program-policies/) - All policies for Chrome extensions, including ads and affiliate links.
- [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) - Rules for bots and apps on Discord.
- [Discord Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service) - Terms for everyone who builds on the Discord API.
- [Discord Community Guidelines](https://discord.com/guidelines) - Rules for users and servers, including spam and platform manipulation.
- [Telegram Bot Platform Developer Terms of Service](https://telegram.org/tos/bot-developers) - Terms for bot developers.
- [Telegram Mini Apps Terms of Service](https://telegram.org/tos/mini-apps) - Terms for Mini Apps.
- [YouTube fake engagement policy](https://support.google.com/youtube/answer/3399767) - Bans artificially increasing views, likes, comments or subscribers, and content that exists only to incentivize engagement.
- [Steamworks onboarding rules](https://partner.steamgames.com/doc/gettingstarted/onboarding) - Valve's rules for what may ship on Steam, which exclude applications with advertising-based business models.
- [Minecraft End User License Agreement](https://www.minecraft.net/en-us/eula) - The license terms for the game, including rules for servers.
- [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines) - Rules for commercial use of the Minecraft name, brand and assets, including what you may charge for.

Moonetix guides that read these rules with offerwalls in mind: [offerwall rules for iOS apps](https://moonetix.com/academy/monetization/offerwall-ios-app-rules), [incentivized installs and Google Play policy](https://moonetix.com/academy/strategy/incentivized-installs-google-play-policy), [offerwall age rules](https://moonetix.com/academy/traffic-quality/offerwall-age-rules).

## Postback and security

A postback is the server-to-server call that tells you a user completed an offer. Verify its signature, credit each transaction once, and handle reversals.

### Signatures and secrets

- [Webhook Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html) - OWASP checklist for receiving server calls: signature verification, replay protection, duplicates and endpoint hardening.
- [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104) - The specification of HMAC, the keyed hash behind most postback signatures.
- [Validating webhook deliveries](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries) - GitHub's walkthrough of HMAC-SHA256 verification, with examples in several languages.
- [Receive Stripe events in your webhook endpoint](https://docs.stripe.com/webhooks) - Stripe's webhook guide, covering signature verification, retries and event ordering.
- [Standard Webhooks](https://www.standardwebhooks.com/) - Open specification and libraries for signed webhooks with timestamps and message IDs.
- [Webhooks.fyi](https://webhooks.fyi/) - Directory of how providers sign and deliver webhooks, with security notes.
- [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) - OWASP guidance on storing and rotating secrets such as postback keys.

### Idempotency and retries

Networks resend a postback when your server is slow or returns an error, so the same transaction can arrive more than once.

- [Designing robust and predictable APIs with idempotency](https://stripe.com/blog/idempotency) - Stripe engineering article on retries and exactly-once effects.
- [Idempotent requests](https://docs.stripe.com/api/idempotent_requests) - How the Stripe API uses idempotency keys.
- [Implementing Stripe-like Idempotency Keys in Postgres](https://brandur.org/idempotency-keys) - Brandur Leach's worked design with transactions and recovery points.
- [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) - Amazon Builders' Library article on request identifiers and late or repeated requests.
- [The Idempotency-Key HTTP Header Field](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/) - IETF draft that standardizes the idempotency key header.
- [Prevent duplicate reward credits](https://moonetix.com/academy/integrations/prevent-duplicate-reward-credits) - Moonetix guide to crediting once by transaction ID.
- [Credits and reversals](https://docs.moonetix.com/credits-and-reversals) - Moonetix docs on the credit and reversal lifecycle of one transaction.

### Postback references by network

How each network signs and sends its postbacks, A to Z.

- [AdGem postbacks](https://docs.adgem.com/docs/integrate/reward-mechanism/postbacks-v3) - Signed JSON POST postbacks with HMAC-SHA256, an IP whitelist and retries.
- [adjoe server-to-server payouts](https://docs.adjoe.io/rewarded-solutions/setting-up-rewarding/server-to-server-payouts/) - Payout callback parameters, SHA-1 signature check and retries.
- [BitLabs callback hashing](https://developer.bitlabs.ai/docs/securing-callbacks-through-hashing) - The HMAC-SHA1 hash appended to each callback and how to validate it.
- [Lootably postbacks](https://documentation.lootably.com/docs/postbacks) - Postback parameters, SHA-256 hash check and retries.
- [Monlix postback](https://docs.monlix.com/docs/postback) - Server-to-server postback parameters.
- [Moonetix postbacks](https://docs.moonetix.com/postbacks) - Macros, statuses, HMAC-SHA256 hash and retries.
- [PubScale server-to-server callbacks](https://pubscale.gitbook.io/offerwall-sdk/server-to-server-s2s-callback-configuration) - Callback parameters, MD5 signature check and IP whitelist.
- [Tapjoy self-managed currency](https://docs.unity.com/en-us/grow/offerwall/monetization/virtual-currency/self-managed-currency) - Reward callbacks to your own server, with a verifier hash, retries and an IP allowlist.
- [TheoremReach offerwall guide](https://theoremreach.com/docs/offerwall) - Entry URLs and reward callback setup, including the callback hash.
- [Upwall postback](https://docs.upwall.net/overview/postback) - Postback parameters and setup.

### Handlers and references from Moonetix

- [offerwall-postback-handlers](https://github.com/moonetix/offerwall-postback-handlers) - Tested postback handlers in several languages.
- [affiliate-postback-macros](https://github.com/moonetix/affiliate-postback-macros) - Postback macros, signatures and reversal rules for tracking platforms and offerwall networks, with sources.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. In short: official links only, one neutral line per entry, placed next to related entries.

Every link is checked each Monday. Dead ones are listed in a single open issue until they are fixed.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, Moonetix has waived all copyright and related rights to this list. See [LICENSE](LICENSE).
