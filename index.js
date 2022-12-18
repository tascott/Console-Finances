let total = 0;
let changes =[];
// Make a new array to play with. Spread finances array into it
let updatedFinances = [...finances];

// Used x instead of i as i looked too similar to 1
for (let x = 0, len = updatedFinances.length; x < len; x++) {
    // Add the profit or loss of each month to a variable
    total += updatedFinances[x][1];

    if (updatedFinances[x+1]) { // check there is still two items to compare
        // Subtract the difference between item i and the one before it, and push to [changes] array
        changes.push(updatedFinances[x+1][1] - updatedFinances[x][1]);
        // Add an item to each month to show the difference betwen the changes
        updatedFinances[x+1].push(updatedFinances[x+1][1] - updatedFinances[x][1]);
    }
}

// [Changes is now an array of the difference between each month]
// Add every item together and divide by the length for an average
const average = changes.reduce((a, b) => a + b, 0) / changes.length;

console.log(`Months: ${finances.length}`);
console.log(`Net p/l: ${total}`);
console.log(`Average change: $${average.toFixed(2)}`);

// Sort the current array from the greatest change to greatest negative change
let sortedFinances = updatedFinances.sort((a, b) => {
    return b[2] - a[2]
}).splice(1); // And remove the first item as it has no 'change'


console.log(`Greatest Increase in Profits: ${sortedFinances[0][0]} - $${sortedFinances[0][2]}`);
console.log(`Greatest Decrease in Profits: ${sortedFinances[sortedFinances.length-1][0]} - $${sortedFinances[sortedFinances.length-1][2]}`);
