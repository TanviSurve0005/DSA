function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){

    let result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
    
}

console.log(mergeSort([5, 1, 4, 2, 8]));
//Big O(n log n) because of the divide and conquer approach. The array is divided into two halves and each half is sorted recursively. The depth of the recursion is log n and each level of recursion processes n elements.