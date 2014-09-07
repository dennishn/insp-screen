(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gnTest4App.controller:Main
   * @description
   * # Main
   * Controller of the inspScreenApp
   */
  angular.module('inspScreenApp.main')
    .controller('Main', Main);

  // Main.$inject = ['inspScreenApp.feeds'];

  function Main(Feeds) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.feeds = [
      {title: 'Dribbble', url: 'http://dribbble.com/shots/everyone.rss'},
      {title: 'FromUpNorth', url: 'http://www.fromupnorth.com/feed'}
    ];

    // vm.feedsList = Feeds.get(vm.feeds);
    // console.log(vm.feedsList)
    vm.images = [];
    console.log(vm.feeds.length)
    Feeds.get(vm.feeds).then(function(data) {
      // vm.images = data;
      // console.log(data.length)
      for(var i = 0; i<vm.feeds.length; i++) {
        // console.log(data)
      }
      angular.forEach(data, function(feed, key) {
        console.log(feed)
        // angular.forEach(feed.entries, function(entry, index) {
        //   vm.images.push( $(entry.content).find('img').eq(0).attr('src') );

        // })
      })

    })
  }
})();
