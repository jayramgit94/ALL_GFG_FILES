const inputStr = "jayram";
const shiftByPos = 2;

const getEncodedStr = (str, shiftByPos) => {
  let encodedStr = "";
  let currentPos = 0,  
newPos = 0;
  for (let i = 0; i < str.length; i++) {
    currentPos = str.charCodeAt(i);
    newPos = currentPos + shiftByPos;
    encodedStr += String.fromCharCode(newPos);
  }
  return encodedStr;
};
 
console.log(getEncodedStr(inputStr, shiftByPos));
