let total = 0;
let monthOnMonthChange =[];
// Make a new array to play with. Spread finances array into it
let updatedFinances = [...finances];

function calculate(){
    for (let x = 0, len = updatedFinances.length; x < len; x++) {
        // Add the profit or loss of each month to a variable
        total += updatedFinances[x][1];

        if (updatedFinances[x+1]) { // check there is still two items to compare
            // Subtract the difference between item i and the one before it, and push to [changes] array
            monthOnMonthChange.push(updatedFinances[x+1][1] - updatedFinances[x][1]);
            // Add an item to each month to show the difference betwen the changes
            updatedFinances[x+1].push(updatedFinances[x+1][1] - updatedFinances[x][1]);
        }
    }

    // [Changes is now an array of the difference between each month]
    // Add every item together and divide by the length for an average
    const average = monthOnMonthChange.reduce((a, b) => a + b, 0) / monthOnMonthChange.length;

    // Sort the current array from the greatest change to greatest negative change
    let sortedFinances = [...updatedFinances].sort((a, b) => {
        return b[2] - a[2]
    }).splice(1); // And remove the first item as it has no 'change'

    logData(updatedFinances.length, total, average.toFixed(2), sortedFinances);
}

//Separate this out as it was clogging up the logic in the main function
function logData(months, total, average, sortedFinances){

    console.log(`Months: ${months}`);
    document.getElementById('total-months').innerHTML = ` ${months}`;

    console.log(`Net p/l: $${total.toLocaleString()}`);
    document.getElementById('total-p-l').innerHTML = ` $${total.toLocaleString()}`;

    console.log(`Average change: $${average}`);
    document.getElementById('ave-change').innerHTML = ` $${average}`;

    console.log(`Greatest Increase in Profits = ${sortedFinances[0][0]} : $${sortedFinances[0][2].toLocaleString()}`);
    document.getElementById('best-month').innerHTML = ` ${sortedFinances[0][0]} : $${sortedFinances[0][2].toLocaleString()}`;

    console.log(`Greatest Decrease in Profits = ${sortedFinances[sortedFinances.length-1][0]} : $${sortedFinances[sortedFinances.length-1][2].toLocaleString()}`);
    document.getElementById('worst-month').innerHTML = ` ${sortedFinances[sortedFinances.length-1][0]} : $${sortedFinances[sortedFinances.length-1][2].toLocaleString()}`;
}

calculate(); // Run on first load with current data


var form = document.getElementById("new-data");


function addNewMonth(event) {
    event.preventDefault();
    let date = document.getElementById('date')
    let amount = document.getElementById('profit')
    console.log(date, amount);

    date.value = '';
    amount.value = '';

}

form.addEventListener('submit', addNewMonth);
