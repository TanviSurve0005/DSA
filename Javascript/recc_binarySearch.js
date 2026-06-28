function binarySearch(arr, target) {
    return search(arr, target, 0, arr.length-1);
}

function search(arr, target, left, right) {
    if(left > right) {
        return -1;
    }
     let mid = Math.floor(left + right) / 2;

    if(arr[mid]==target){
        return mid;
    }
    if(target < arr[mid]){
        return search(arr, target, left, mid-1);
    }
    return search(arr, target, mid+1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1    
// Big O(log n) 