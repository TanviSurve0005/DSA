var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    const result = []
    let pair = intervals[0]

    for(const i of intervals){
        if(pair[1] >= i[0]){
            pair[1] = Math.max(i[1], pair[1])
        }else{
            result.push(pair)
            pair = i
        }
    }
    result.push(pair)
    return result
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
// Big O(n) 