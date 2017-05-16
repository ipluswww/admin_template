/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          templateUrl: 'app/pages/datepicker/datepicker.html',
          controller: "MailTabCtrl",
          title: 'DatePicker',
          sidebarMeta: {
            icon: 'fa fa-calendar',
            order: 0,
          },
        });
  }

})();

