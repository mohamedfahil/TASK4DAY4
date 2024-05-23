//Convert all the strings to title caps in a string array

console.log("The output is")
var str="mohammed fahil abdul kadar"
var funn=function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(funn(str))

//IIFE

var funn20=(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })
  console.log(funn20("cristiano ronaldo"));
  console.log(funn20("lionel messi"));