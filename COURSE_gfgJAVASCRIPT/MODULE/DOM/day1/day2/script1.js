let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#para");

para.addEventListener("click",() =>{
    alert("paratag");
})

div.addEventListener("click",() =>{
    alert("divtag");
})

form.addEventListener("click",() =>{
    alert("formtag");
}) 

