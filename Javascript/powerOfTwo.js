function powerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 !==0){
            return false;
        }
        n = n/2
    }
    return true
}
//Big o(log n)

function powerOfTwo(n){
    if(n<1){
        return false
    }

    return(n & (n-1))===0   
}
//Big O(1)

console.log(powerOfTwo(3))
console.log(powerOfTwo(2))
console.log(powerOfTwo(8))

//Big o(log n)