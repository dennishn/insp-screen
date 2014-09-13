(function() {
	'use strict';

	angular
		.module('inspScreenApp')
	  	.directive('feedItem', feedItem);

	/* @ngInject */
	function feedItem() {
		/**
		 * @ngdoc directive
		 * @name inspScreenApp.directive:feedItem
		 * @description
		 * # feedItem
		 */
		var directive = {
			templateUrl: 'modules/feed-item/feeditem.template.html',
			link: link,
			restrict: 'EA',
      scope: {
        image: "=",
        resource: "="
      }
		};

		return directive;

		function link(scope, iElement, iAttributes){

      var img = iElement.find('img');
      var container = iElement.find('.feed-item');

      scope.loaded = false;
      img.bind('load', function() {
        scope.$apply(function() {
          scope.loaded = true;
        })
      });


		};
	};
})();
