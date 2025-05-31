

// console.log(displaymessage.includes('j'));//true
// if(displaymessage.includes('j')){
    //     console.log('yes');
    // }else{
        //     console.log('no');
        // }//YES
        
        
        
        
        
        // for(let char of displaymessage){
            //     if(vowels.includes(char)){
                //         console.log(`${char} is a vowel`);
                //         console.log("THIS STRING HAVE VOWELS ");
                //         console.log(` `);
                
                
                //     }else{
            //         console.log(`${char} is not a vowel`);
            //         console.log("THIS STRING HAVE NO VOWELS ");
            //     }
            // }
            
            
            
const displaymessage = " qwrtykjs ";
const vowels = "aeiouAEIOU";
let flag = false;

for(let char of displaymessage){
    if(vowels.includes(char)){
        flag = true;
        break;

    }else {
        flag = false;
    }
}

if(flag === true){
    console.log("The string contains vowels");    
}
else{
    console.log("The string does not contain vowels");
}


