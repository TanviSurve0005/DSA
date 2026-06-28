var sortPeople = function(names, heights) {
    let people = [];

    for (let i = 0; i < names.length; i++) {
        people.push([names[i], heights[i]]);
    }

    people.sort((a, b) => b[1] - a[1]);

    return people.map(person => person[0]);
};

console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // Output: ["Mary","Emma","John"]
// Big O(n log n) because of the sort function which uses a comparison-based sorting algorithm. The sort function has a time complexity of O(n log n) in the average and worst cases.