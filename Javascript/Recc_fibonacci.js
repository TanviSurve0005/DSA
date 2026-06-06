function rec_fibonacci(n){
    if(n<2){
        return n
    }
    return rec_fibonacci(n-1) + rec_fibonacci(n-2)
}

console.log(rec_fibonacci(0))
console.log(rec_fibonacci(2))
console.log(rec_fibonacci(6))

// Big O(2*n)