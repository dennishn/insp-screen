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

    vm.feedsList = Feeds.get(vm.feeds);
    console.log(vm.feedsList)
  }
})();
