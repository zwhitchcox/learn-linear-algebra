var app = angular.module('app', []);
app.controller('Ctrl', ['$scope', function($scope) {
}]);
app.controller('SolutionCtrl', ['$scope', function($scope) {
  $scope.start = function() {
    $scope.randos = getRandomNumbers(12,-5,10)
    $scope.constant =
      $scope.randos[0]*$scope.randos[3] +
      $scope.randos[1]*$scope.randos[4] +
      $scope.randos[2]*$scope.randos[5]
    $scope.answers = []
    for (var i = 0; i < 3; i++) {
      var sum =
        $scope.randos[0]*$scope.randos[i*3+0+3] +
        $scope.randos[1]*$scope.randos[i*3+1+3] +
        $scope.randos[2]*$scope.randos[i*3+2+3]
      if (sum===$scope.constant) {
        $scope.answers.push(
          {status:'correct',numbers:$scope.randos.slice(i*3+0+3,i*3+0+6)}
        )
      } else{
        $scope.answers.push(
          {status:'wrong',numbers:$scope.randos.slice(i*3+0+3,i*3+0+6)}
        )
      }
    }
    // shuffle array
    for (var i = $scope.answers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = $scope.answers[i];
      $scope.answers[i] = $scope.answers[j];
      $scope.answers[j] = temp;
    }
  }

  function getRandomNumbers(num,start,range) {
    var numbos = []
    for (var i = 0; i < num; i++) {
      numbos.push(Math.random()*range + start|0)
    }
    return numbos
  }
}]);

app.controller('FreeVariablesCtrl', ['$scope', function($scope) {
  var i = 5,equations =  0;
  $scope.system=[]
  while (i > 0 && ++equations < 4) {
    var randomSizeOfEquations = Math.random()*i|0
    $scope.system.push(Array.apply(null, new Array(i))
      .map(Number.prototype.valueOf,0))
    i -= randomSizeOfEquations
    console.log(i)
  }
  $scope.system=[
    [1,2,3,4],
    [0,2,3,4]
  ]
}]);
