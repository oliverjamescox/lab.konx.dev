// あいうえお
function test() {
    for (var i = 0; i < 10; i++) {
      var a;
      var b; //comment
      b = i;
      a = i;
      console.log(i,a,b);
    }
  }
  
  function /* 🐶 あいうえお */ test2() {
    for (var i = 0; i < 10; i++) {
      if (i) {
        console.log(i);
      }
    }
  }
  
  function f()
  {
    console.log('🐶');
  }


  test();
  test2();
  f();