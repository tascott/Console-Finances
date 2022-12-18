let total = 0;
let changes =[];

// Used x instead of i as i looked too similar to 1
for (let x = 0, len = finances.length; x < len; x++) {
    // Add the profit or loss of each month to a variable
    total += finances[x][1];

    if (finances[x+1]) { // check there is still two items to compare
        // Subtract the difference between item i and the one before it, and push to [changes] array
        changes.push(finances[x+1][1] - finances[x][1])
    }

}

// [Changes is now an array of the difference between each month]
// Add every item together and divide by the length for an average
const average = changes.reduce((a, b) => a + b, 0) / changes.length;

console.log(`Months: ${finances.length}`);
console.log(`Net p/l: ${total}`);
console.log(`Average change: ${average}`)