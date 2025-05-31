const input = document.querySelector(".input");

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function inputHandler(event) {
    console.log("User typed:", event.target.value);
    // API call logic here
    // api.getDatafromserver()
}

// Apply debounce with a 500ms delay
input.addEventListener("keyup", debounce(inputHandler, 500));
