//oupt must be in object form 

 const arr = [1, 2, 2, "h", 7, 6, 7, "e", 9,"e" , 3, 6, 5, 6, 7, 8, 9, 10];
 const result = arr.reduce((acc, curr) => {
   if (acc[curr]) {
     acc[curr] += 1;
   } else {
     acc[curr] = 1;
   }
   return acc;
 }, {});
 
 console.log(result);