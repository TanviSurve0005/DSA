function Factorial(n){
    result = 1;
    for(let i =2; i<=n; i++){
        result*=i
    }
    return result;
}

console.log(Factorial(1))
console.log(Factorial(5))
console.log(Factorial(0))
//Big O(n)