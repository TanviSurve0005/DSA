function moveZero(arr){
    let pos = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] !==0){
            let temp = arr[pos];
            arr[pos] = arr[i];
            arr[i] = temp;

            pos++
        }
    }
    return arr;
}

console.log(moveZero([0,1,0,3,12]))