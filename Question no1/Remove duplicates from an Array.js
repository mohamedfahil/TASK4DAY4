//Remove duplicates from an Array
//using anonymos
console.log("the orginal values are")
var array=[1,2,2,2,3,4,5,4,6,7,2,3,4,8,9]
var func=function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  console.log(func(array))

  //ii)
  //using IIFE

  var org=(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })
   console.log(org([1,1,2,3,3,5,4,2,6,7,8,9]))
