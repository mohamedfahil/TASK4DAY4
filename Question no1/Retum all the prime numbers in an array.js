//Retum all the prime numbers in an array
//Using anonymous

console.log("Prime Numbers are")
var numArray=[2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 var fun123=function(numArray){
  Array = numArray.filter((number) => {
   for (var i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) return false;
 }
  return true;
 });
 console.log(numArray);
}
console.log(fun123(numArray))

//ii)
//IIFE


    var fun=(function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })
   console.log(fun([1,2,3,4,5,6,7,8,9,10]))