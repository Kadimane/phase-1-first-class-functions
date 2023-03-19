function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    return function namedFunction() {
      // code for named function
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
      // code for anonymous function
    };
  }
  
  
  