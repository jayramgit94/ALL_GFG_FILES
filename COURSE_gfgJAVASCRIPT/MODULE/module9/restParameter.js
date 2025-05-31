/**
 * REST parameter --> ...rest/..args
 * it must be last formal parameter
 */

function calculateToal (...args){
    // console.log(a,b);
    // const sort = args.sort()
    // console.log(sort);
    let total = 0;
    for(let value of args){
        total +=value;
    }
    console.log(total);
    
}
calculateToal(2,45,5,787,7,5,54,64,234,0)