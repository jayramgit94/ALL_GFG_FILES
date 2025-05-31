const string = "the quick brown fox jumps over the lazy dog ";

function getStrWithNoVowels(str){
    const vowels =["a", "e","i","o","u"];
    let result = "";//dont use const here
    for(let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result += char
        }
    }
    return result;
}
const output = getStrWithNoVowels(string);
console.log(output);
//try to make remove the no. 
//no. of vowels
//no. of consonets
