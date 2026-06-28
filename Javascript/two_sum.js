var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in map) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
};

console.log(twoSum(nums = [2,7,11,15], target = 9))