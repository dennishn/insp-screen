(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name inspScreenApp.Feeds
   * @description
   * # Feeds
   * Factory in the inspScreenApp.
   */
  angular.module('inspScreenApp.feeds')
    .service('Feeds', Feeds);

  // Feeds.$inject = ['FeedsFactory'];

  function Feeds(FeedsFactory, $q) {
    this.get = function(feedList) {
      var feedSources = feedList;
      var feeds = [];

      var deffered = $q.defer();

      if(feeds.length === 0) {
        for (var i=0; i<feedSources.length; i++) {
          FeedsFactory.fetch({q: feedSources[i].url, num: 20}, {}, function(data) {
            var feed = data.responseData.feed;
            feeds.push(feed.entries);
            deffered.resolve(feeds);
          });
        }
      }
      return deffered.promise;
    };
  };

})();
