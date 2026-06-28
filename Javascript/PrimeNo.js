function isPrimeNo(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<Math.sqrt(n); i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(isPrimeNo(6));

//Big O(n)
//Big O(sqrt(n))
