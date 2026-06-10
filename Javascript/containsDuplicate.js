// var containsDuplicate = function(nums) {
//     const map = new Map();
//     for(const n of nums){
//         if(map.has(n)) return true
//         map.set(n, true)
//     }
//     return false;
// };

var containsDuplicate = function(nums) {
    const set = new Set(nums)
    if(set.size === nums.length){
        return false
    }
    return true
};
console.log(containsDuplicate([1,2,3,1])); 
console.log(containsDuplicate([1,2,3,4]));

// Big O(n)