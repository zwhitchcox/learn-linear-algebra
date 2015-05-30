
app.directive('systemOfEquations', function() {
  return {
    restrict: 'E',
    scope: {
      system: '=system'
    },
    templateUrl: 'system-of-equations.html',
    link: function(scope) {
      function constructSystemFormat() {
        var variables = ['x','y','z','s','t']
        scope.system = scope.system.reduce(function (prev,cur,idx) {
          var currentEquation = ''
          if (cur.length>0) {
            cur.forEach(function(c,i,arr) {
              if (i===0) {
                if (cur[i] !== 0) {
                  currentEquation+=(cur[0]< 0 ? '':'\u00A0')+cur[0]+'x'
                } else {
                  currentEquation+='\u00A0\u00A0\u00A0'
                }
              } else if (cur[i] === 0){
                currentEquation+='\u00A0\u00A0\u00A0\u00A0\u00A0'
              } else if (i<(cur.length-1)){
                currentEquation+=(cur[i]< 0 ? ' - ':' + ')+Math.abs(cur[i])+variables[i]
              } else {
                currentEquation+= ' = ' + cur[i]
              }

            })
          }
          prev.push(currentEquation)
          return prev
        },[])
      }
      constructSystemFormat()
    }
  };
});
