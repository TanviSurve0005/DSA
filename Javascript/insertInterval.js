var insert = function(intervals, newInterval) {
    const result =[]
    for(const interval of intervals){
        if(interval[1] < newInterval[0]){
            result.push(interval)
        }else if(interval[0]>newInterval[1]){
            result.push(newInterval)
            newInterval = interval
        }else{
            newInterval[0] = Math.min(interval[0], newInterval[0])
            newInterval[1] = Math.max(interval[1], newInterval[1])
        }
    }
    result.push(newInterval)
    return result
};

console.log(insert([[1,3],[6,9]], [2,5])); 
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); 
// Big O(n) 