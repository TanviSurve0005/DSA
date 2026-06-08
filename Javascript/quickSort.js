function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left =[];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 1, 4, 2, 8]));

//Big O(n log n) because of the divide and conquer approach. The array is divided into two halves and each half is sorted recursively. The depth of the recursion is log n and each level of recursion processes n elements.
//Big O(n^2) in the worst case, when the pivot is the smallest or largest element, the time complexity can degrade to O(n^2) because of the unbalanced partitions. However, with good pivot selection strategies, the average time complexity remains O(n log n).