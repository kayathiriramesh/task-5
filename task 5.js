// 1.a print odd number
//anonymous function
var odd=[2,5,6,7,9];
for(var i=0;i<odd.length;i++)
{
if(odd[i]%2!==0)
{
    console.log(odd[i]);
}
}
// IIFE function

(function oddno(odd){
for(var i=0;i<odd.length;i++)
{
if(odd[i]%2!==0)
{
    console.log(odd[i]);
}
}})([2,5,6,7,9])

// 1.b string convert to title caps

function title(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(title("welcome guvi geek"));
//IFFE function
(function caps (a)
{
function title(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(title("welcome guvi geek"));
}) (a)

// 1.c sum of all elements in array
// anonymous function
var sum=[23,56,8,56,24];
var res=0;
for(var i=0;i<sum.length;i++)
{
res=res+sum[i];
}
console.log(res);

//IIFE function

var sum=[23,56,8,56,24];
var res=0;
(function(sum)
{
    for(var i=0;i<sum.length;i++)
{
res=res+sum[i];
}
console.log(res);
})(sum)

// 1.d find prime number 
//anonymous function 
var a = [5, 9, 7, 25]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}
console.log(prime);


//IIFE function

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];
(function primenum(a)
{
function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);
})(a)


// 1.e find palindromes in an array
//  anonymous function 
var str="madam";
var str1=str.split("");
function palin(str)
{
    var reverse= str1.reverse();
    var str2=reverse.join('');
    if(str===str2)
    {
        console.log("the string is palindrome");
    }
    else
    {
    console.log("the string is not a palindrome");
    }
}
console.log(palin(str));
 // IIFE function

 var str="love";
var str1=str.split("");
(function palindrome(a)
{
    function palin(str)
{
    var reverse= str1.reverse();
    var str2=reverse.join('');
    if(str===str2)
    {
        console.log("the string is palindrome");
    }
    else
    {
    console.log("the string is not a palindrome");
    }
}
console.log(palin(str));
})(a)

// 1.f median of two sorted arrays of the same size.
//anonymous function 
var a=[2,3,4];
var b=[5,6,7];
function median(a,b)
{
    var c=[...a,...b].sort();
    var d=c.length/2;
    var e= d - 1;
    var median=(c[d]+c[e])/2;
    console.log(median);
}
console.log(median(a,b));

//IFFE function

var a=[2,3,4];
var b=[5,6,7];
(function meid(a,b)
{
function median(a,b)
{
    var c=[...a,...b].sort();
    var d=c.length/2;
    var e= d - 1;
    var median=(c[d]+c[e])/2;
    console.log(median);
}
console.log(median(a,b));
}) (a,b)

//1.g Remove duplicates from an array
//anonymous function

function dup(arr){
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
var array = [1, 2, 3, 2, 3];
dup(array);

// IFFE functio
(function uniqe(a)
{
function dup(arr){
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
var array = [1, 2, 3, 2, 3];
dup(array);
}) (a)

//1.h Rotate an array by k times
//anonymous function

function rotatearry(arr,k)
{
    for(var i=0;i<k;i++)
    {
        var temp=arr[0];
        for(var j=0;j<arr.length;j++)
        {
        arr[j]=arr[j+1];
    }
    arr[arr.length - 1] = temp
}return arr;
}
var arr=[2,8,6,4,3];
var k=3;
console.log(rotatearry(arr,k));

//IFFE function

(function rotate (arr)
{
    function rotatearry(arr,k)
{
    for(var i=0;i<k;i++)
    {
        var temp=arr[0];
        for(var j=0;j<arr.length;j++)
        {
        arr[j]=arr[j+1];
    }
    arr[arr.length - 1] = temp
}return arr;
}
var arr=[2,8,6,4,3];
var k=3;
console.log(rotatearry(arr,k));
})(arr)

//3.a Print odd numbers in an array
// arrow function
var num=[1,2,3,4,5,6];
var odd=num.filter(ele => ele % 2===1);
console.log(odd);

//3.c sum of all elements in an array
//arrow function

var sum =([]) =>
{
    var res=0;
    for(var i=0;i<sum.length;i++)
    {
    res=res+sum[i];
    console.log(res);
    }   
}
console.log(sum([23,56,8,56,24]));

//3.d Return all the prime numbers in an array

var a = [];
var prime = [];
var result=(arr)=>
{
      for (var i=0;i<arr.length; i++) {
        for (var j=2;i<arr[i]; i++) {

       if ((arr % j) == 0) { 
        break;
       } 
     }
     if(arr[i]==j){
        a.push(arr[i]);
}
      }
      return a;
    }

//3.e Return all the palindromes in an array
var result2=(arr)=>
{
    var a=arr[i];
    var reve= a.reverse();
    var str=reve.join('');
    if(a===str)
    {
        console.log("the string is palindrome");
    }
    else
    {
    console.log("the string is not a palindrome");
    }
}
console.log(result2(["love"]))

