const str = "madam";
function getreversedstr (str){
    let reversedstrig= "";
    for(let i = str.length-1 ; i <=0 ; i--){
        reversedstrig += str[i];
    }
    return reversedstrig;
}
// taiking ast charcter and concatinating and then next xharcter 
const result = getreversedstr(str);
if(result === str){
    console.log("string is palindrom ");
    
}else {
    console.log("string is not palindrom");
    
}




// also can solve via


//i can't reverse the string directly so wi will first convert it into arr then will reverse it 

// const arrOfChar = str.split("");
// const reversedarr = arrOfChar.reverse();
// const reversedstr = reversedarr.join("")
//the three lines can be written in one line is like this 


// const reversedstr = str.split("").reverse().join("");
// console.log(reversedstr);
// if ( str === reversedstr){
//     console.log("string is a palindrom");
    
// }else{
//     console.log("string is not palindorm");
    
// }






