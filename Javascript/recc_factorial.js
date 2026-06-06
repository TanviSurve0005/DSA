function factorial(n){
    if(n===0){
        return 1
    }
    return factorial(n-1)* n;
}

console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(1))
