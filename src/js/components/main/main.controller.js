(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    this.things = ['Baseball', 'Coding', 'Skiing', 'Photography'];
  }

})();
