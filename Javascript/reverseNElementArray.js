var reverseNElementArray = function(nums, k) {
    k = k%nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
    return nums
};

function reverse(nums, left, right){
    while(left<right){
        [nums[left], nums[right]] = [nums[right],nums[left]]
        left++;
        right--;
    }
}

console.log(reverseNElementArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
