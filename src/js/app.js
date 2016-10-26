// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.about'
    ]);

})();
