function calculatesum(min, max){
    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    if (min < max){
        console.log(sum);
    } else {
        console.log("Invalid input");




}
}

calculatesum(3,10);