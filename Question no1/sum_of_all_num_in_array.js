//sum_of_all_num_in_array
//anonymos

var array= Number([4, 8, 7, 13, 12])
var arr=function(array){
    var sum = 0;
    for(var i = 0 ; i<array.length ; i++){
       sum = sum + arr[i];
     }
     return sum;
  }
  console.log(arr(array));


  //ii)IIFE
  (function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4])

