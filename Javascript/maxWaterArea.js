var maxArea = function(height) {
    let max = 0
    let l =0
    let r = height.length -1
    while(l<r){
        max = Math.max(max, Math.min(height[l], height[r]) * (r-l))

        if(height[l] < height[r]) l+=1
        else if (height[l] > height[r]) r-=1
        else{
            l+=1
            r-=1
        }
    }
    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
// Big O(n)