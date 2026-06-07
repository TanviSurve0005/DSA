/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <=1){
        return nums;
    }
    const mid = Math.floor((nums.length)/2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
};

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

console.log(sortArray([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // Output: [0, 0, 1, 1, 2, 5]
// Big O(n log n)   