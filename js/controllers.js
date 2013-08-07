angular.module('viffReport', [])
  .controller('reportCtrl', ['dataService', '$scope', function (dataService, $scope, $http) {
    function init(results, diffCount, caseCount, totalAnalysisTime, browsers) {
      $scope.totalAnalysisTime = totalAnalysisTime;
      $scope.diffCount = diffCount;
      $scope.caseCount = caseCount;
      $scope.sameCount = caseCount - diffCount;
      $scope.cases = results;
      $scope.browsers = browsers;

      $scope.search = {
        browser: browsers[0],
        url: ''
      };

      $scope.currentViff = results[0];

      $scope.$watch('currentViffId', function (newVal, oldVal) {
        $scope.currentViff = filter(results, function (viffCase) {
          return viffCase.id == newVal;
        })[0];
      });

      $scope.$watch('search.browser', function (newVal, oldVal) {
        $scope.currentViff = filter(results, function (viffCase) {
          return viffCase.browser == $scope.search.browser;
        })[0];   

        $scope.currentViffId = $scope.currentViff.id;
      });

      $scope.approveDiff = function(){
        $scope.currentViff.misMatchPercentage = 0;
      }

      key('/', function(){
        $scope.$apply(function () {
          $("#search_input").focus();
        });
        return false;
      });

      
      key('A, ctrl+A', function(){
        $scope.$apply(function () {
          $scope.approveDiff();
        });
        return false;
      });

      key('j', function () {
        $scope.$apply(function () {
          var idx = $scope.cases.indexOf($scope.currentViff);
          if(idx != $scope.cases.length - 1) {
            $scope.currentViff = $scope.cases[idx + 1];
            $scope.currentViffId = $scope.currentViff.id;
          }
          return false;
        });
      });

      key('k', function () {
        $scope.$apply(function () {
          var idx = $scope.cases.indexOf($scope.currentViff);
          if(idx != 0) {
            $scope.currentViff = $scope.cases[idx - 1];
            $scope.currentViffId = $scope.currentViff.id;
          }
          return false;
        });
      });

      key('h', function () {
        $scope.$apply(function () {
          var idx = $scope.browsers.indexOf($scope.search.browser);
          if(idx != 0) {
            $scope.search.browser = $scope.browsers[idx - 1];
          }
          return false;
        });
      });

      key('l', function () {
        $scope.$apply(function () {
          var idx = $scope.browsers.indexOf($scope.search.browser);
          if(idx != $scope.browsers.length - 1) {
            $scope.search.browser = $scope.browsers[idx + 1];
          }
          return false;
        });
      });

      $scope.$apply();
    }

    function filter(arr, condition) {
      var results = [];
      angular.forEach(arr, function (item) {
        if(condition(item)) {
          results.push(item);
        }
      });
      return results;
    }

    dataService.request(init);
  }]);
