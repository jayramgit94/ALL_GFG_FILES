
let timer;
let count = 0;
let isPaused = false;


//eevent listner
let input = document.querySelector(".input");

// input.addEventListener("input", ()=> {
//     console.log(input.value);

    // input.addEventListener("keyup", ()=> {
    //     console.log(input.value);

    // input.addEventListener("focus", ()=> {
    //     console.log(input.value);
    input.addEventListener("input", ()=> {
        console.log(input.value);
    

})




 
//mouse events
//this will give me all page cordinates 
document.body.addEventListener("mousedown",()=>{
    let xcor = event.pageX;//event.clientX also can use 
    let ycor = event.pageY;
    let cors = `X car - ${xcor}, Y cor - ${ycor}`
    console.log(cors);

} )

input.addEventListener("mousedown", (event)=>{
    // console.log(event.button);

    // let xcor = event.pageX;//event.clientX also can use 
    // let ycor = event.pageY;
    // let cors = `X car - ${xcor}, Y cor - ${ycor}`
    // console.log(cors);
    


    
})
















document.getElementById("startBtn").addEventListener("click", function () {
    if (!timer) {
        timer = setInterval(() => {
            if (!isPaused) {
                count++;
                document.getElementById("statusText").innerText = `Status: Running... ${count}`;
            }
        }, 1000);
    }
});

document.getElementById("stopBtn").addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    document.getElementById("statusText").innerText = "Status: Stopped";
});

document.getElementById("resumeBtn").addEventListener("click", function () {
    if (timer && isPaused) {
        isPaused = false;
        document.getElementById("statusText").innerText = `Status: Resumed... ${count}`;
    }
});

