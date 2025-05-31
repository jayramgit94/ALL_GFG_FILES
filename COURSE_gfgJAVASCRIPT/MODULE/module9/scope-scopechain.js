
/**
 * scpe and scope chain is avialabe because of lexical environment
 * the lexical environment is---
 * 1]environment record vaule and key(its own)
 * 2] refrence to outer lexical envirnomnet 
 * 
 * script aaaaaaaa[ a:1 ]
 * 
 * function
 * 
 * 
 * 
 * lexical environment from this lecture questions on it 
 * 
 */


let a = 3;
let e = 10;
function x() {
  let b = 5;
  let d = 0;
  console.log({ a });
  function y() {
    //child of x
    // inner function - inside functin x
    //execute
    console.log({ b }); //this is called chanin function while means it first find inside this then move to the paent fucntion
    let c = 7;
    function z() {
      console.log({ c,d,e });
    }
    z();
  }
  y();
}
x();
