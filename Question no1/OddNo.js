//programs in anonymous function & IIFE
//(A[i])
console.log("The Odd Numbers Are:")
var array=[1,2,3,4,5,6,7,8,9,];
 var fun= function(array){
    for(var i = 0; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
            
         } 
     }
  }
  console.log(fun(array))

//(ii)
console.log("ODD NUMBERS:")
let arr=[0,1,2,3,4,5,6,7,8,9];
let odd = function () {
let odd= arr. filter(num => num %2 ==1)
console.log(odd)
}
odd()

 