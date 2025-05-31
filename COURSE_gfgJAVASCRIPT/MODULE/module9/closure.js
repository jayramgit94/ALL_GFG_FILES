/**
 * a clousre is a function that remmbers its outer variable and can access them
 */

// scope is availabe because of lexical environment
//bundled together with its lexical environment
function x() {
  let a = 5;// TDZ ends here // if yaha pr var hoata to it gives UNDEFINED 
  function y() {
    console.log(a);
    let a;//it is in TDZ it start from here

  }
  y();
}

x();
