
app.directive('systemOfEquations', function() {
  return {
    restrict: 'E',
    scope: {
      system: '=system'
    },
    templateUrl: 'system-of-equations.html',
    link: function(scope) {
      function constructSystemFormat() {
        var variables = ['x','y','z','s','t','u','v','w']
        scope.system = scope.system.reduce(function (prev,cur,idx) {
          var currentEquation = ''
          if (cur.length>0) {
            var pivot = true
            cur.forEach(function(c,i,arr) {
              if (i===(cur.length-1)) {
                currentEquation+= ' = ' +(cur[i]< 0 ? '':'\u00A0')+ cur[i]
              } else if (cur[i] === 0){
                currentEquation+='\u00A0\u00A0\u00A0\u00A0\u00A0'
              } else if (i<(cur.length-1)) {
                if (pivot === true) {
                  currentEquation+=(cur[i]< 0 ? '':'\u00A0')+cur[i]+variables[i]
                  pivot = false
                } else {
                  currentEquation+=(cur[i]< 0 ? ' - ':' + ')+Math.abs(cur[i])+variables[i]
                }
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
