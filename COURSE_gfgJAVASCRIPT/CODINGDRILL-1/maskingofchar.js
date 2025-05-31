const str = "76587236873287675"//8239825897####

const maskchar = "#".repeat(4)
console.log(maskchar);
const result = str.slice(0, str.length-4) + maskchar;
console.log(result);
