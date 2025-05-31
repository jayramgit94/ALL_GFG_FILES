const inputString = "Hello, World!";
const vowels = "aeiou";

for (let i = 0; i< inputString.length; i++) {
  if (vowels.includes(inputString[i])) {
    console.log(` ${inputString[i]} is Vowel found at index ${i}`);
  }
  else{
    console.log(` ${inputString[i]} is not Vowel found at index ${i}`);
    
  }
}

//incluseds givers the boolean value if the string is present in the string or not
//output of this code is 