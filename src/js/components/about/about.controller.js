(function() {

  'use strict';

  angular
    .module('myApp.components.about', [])
    .controller('aboutController', aboutController);

  aboutController.$inject = ['$scope'];

  function aboutController($scope) {
    /*jshint validthis: true */
    this.contacts = ['Hunter', 'Chris', 'Michael', 'Jacob'];
    this.greeting = 'Hello World!';
  }

})();
