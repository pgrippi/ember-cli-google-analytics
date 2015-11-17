import Ember from 'ember';
import ENV from '../config/environment';

const { get, isEmpty } = Ember;

export default Ember.Mixin.create({
  beforePageviewToGA(/* ga */) {
    // no-op
  },

  didTransition(page, title) {
    this._super(...arguments);

    let webPropertyId = get(ENV, 'googleAnalytics.webPropertyId');
    let trackerType = get(ENV, 'googleAnalytics.tracker') || 'analytics.js';
    let trackerGlobal = get(ENV, 'googleAnalytics.globalVariable') || 'ga';

    if (isEmpty(webPropertyId)) {
      return;
    }

    page = page ? page : this.get('url');
    title = title ? title : this.get('url');

    if (trackerType === 'analytics.js') {
      let ga = window[trackerGlobal];

      this.beforePageviewToGA(ga);

      ga('send', 'pageview', {
        page,
        title
      });
    } else if (trackerType === 'ga.js') {
      window._gaq.push(['_trackPageview']);
    }
  }
});
