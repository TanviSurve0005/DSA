function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
            
        }
    }while(swapped);
    return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
//Big O(n^2) because of the nested loops. The outer loop runs n times and the inner loop also runs n times in the worst case.