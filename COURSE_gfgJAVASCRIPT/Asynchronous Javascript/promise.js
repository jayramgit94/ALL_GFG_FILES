const URL = "https//mockdata.prakashsakari.repl.co/users";

let promise = fetch(URL);

promise//methods should be called with a promise object that contains 
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.log("error ocured ");
    
});
