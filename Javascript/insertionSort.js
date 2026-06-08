function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr; 
}

console.log(insertionSort([5, 1, 4, 2, 8]));
//Big O(n^2) because of the nested loops. The outer loop runs n times and the inner loop also runs n times in the worst case.   