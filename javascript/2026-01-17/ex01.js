const a = [1, 4, 6, 9];
const b = [2, 3, 4, 5, 8];

/*
* merge a and b to sortedNumbers
* ex sortedNumbers = [1, 2, 3, 4, 4, 5, 6, 8, 9]
* */


let i = 0, j = 0;
const sortedNumbers = [];

while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
        sortedNumbers.push(a[i++]);
    } else {
        sortedNumbers.push(b[j++]);
    }
}

sortedNumbers.push(...a.slice(i), ...b.slice(j));

console.log(sortedNumbers);

