# ember-cli-google-analytics Changelog

### Master

* Added a mixin that can be included in the applications Router that will trigger the Google Analytics pageview when transitioning between routes.
* Removed the initial pageview call inside of the inline Google Analytics tracking code in favor of using the new mixin.

### 1.2.0

* Adds support for [Display Advertising](https://support.google.com/analytics/answer/3450482) for both analytics.js and ga.js. Enable by setting the `displayFeatures` configuration to `true`, it is off by default.

### 1.1.0

* Adds support for cookie-related settings: `cookieDomain`, `cookieName`, and `cookieExpires`. This applies to analytics.js only.

### 1.0.0

* Initial release of the ember-cli-google-analytics addon
