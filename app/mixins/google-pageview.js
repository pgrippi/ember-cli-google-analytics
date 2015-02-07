import Ember from "ember";
import ENV from '../config/environment';

export default Ember.Mixin.create({
  pageviewToGA: function() {
    if (Ember.get(ENV, 'googleAnalytics.webPropertyId') != null) {
      var trackerType = Ember.get(ENV, 'googleAnalytics.tracker');

      if (trackerType === 'analytics.js') {
        window.ga('send', 'pageview', {
          'page': this.get('url'),
          'title': this.get('url')
        });
      } else if (trackerType === 'ga.js') {
        window._gaq.push(['_trackPageview']);
      }
    }
  }.on('didTransition')
});
