/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      description: 'Persion',
      stats: '30%',
      icon: 'rocket',
      backgroundColor: 'rgb(32, 158, 145)'
    }, {
      color: pieColor,
      description: 'Money',
      stats: '60%',
      icon: 'users',
      backgroundColor: 'rgb(45, 172, 200)'
    }
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  }
})();