console.log(`Months: ${finances.length}`);

let total = 0;

// Used x instead of i as i looked too similar to 1
for (let x = 0, len = finances.length; x < len; x++) {
    // Add the profit or loss of each month to a variable
    total += finances[x][1];

}

console.log(`Net p/l: ${total}`);


