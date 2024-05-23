//Rotate An array byK times
//i)Anonynos
function RotateK(a, n, k) 
{  k = k % n; 
    for (let i = 0; i < n; i++) { 
        if (i < k) { 
            console.log(a[n + i - k] + " "); 
        } 
        else { 
           console.log((a[i - k]) + " "); 
        } 
    } 
    console.log("<br>"); 
} 
let Array = [1, 2, 3, 4, 5]; 
let N = Array.length; 
let K = 2; 
  
RotateK(Array, N, K); 

//ii)Using IIFE
(function(array , k){
    k = k % (a.length);
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
