"use strict";
function pow(x, n)
{
    return x**n; 
}
function sumTo(n)
{
    return (n*(n+1))/2 
}
function factorial(n)
{
    if (n<=0)
    {
        return 1n; 
    }
    else{
        return ( BigInt (n) *  BigInt(factorial(n-1))); 
    }
}
function fib(n){
    a = BigInt(1); 
    b=BigInt(1); 
    if (n== BigInt(0))
    {
        return BigInt(0); 
    }
    else
    {
        for (i = BigInt(3); i<=n; i++) 
        {
            c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
}
function compare(x)
{
return function(y)
{
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}
function sum()
{
    var result=0; //сумма
    for (var i=0; i<arguments.length; i++)
    {
        result+=arguments[i]
    }
    return result;
}
