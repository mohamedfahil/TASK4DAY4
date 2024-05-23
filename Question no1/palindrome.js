//palindome using anonymos
var ans=([1,2,3],3)
var funpal=function (arr, n)
    {
       
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(funpal("madam"))

    //Using IIFE

   var funn12= (function (arr, n)
        {
            
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })
       console.log(funn12("malayalam"))
    