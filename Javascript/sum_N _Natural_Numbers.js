function summation(n){
    sum =0;
    for(let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;
}
//Big -O(n)

console.log(summation(4))

function summation1(n){
    return(n*(n+1))/2;
}

console.log(summation1(4))
//Big -O(1)