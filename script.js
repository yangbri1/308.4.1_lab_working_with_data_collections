// ####################################
// # Lab 308.4.1: Working with Data Collections
// # Brian Yang
// # Submit Github Link to Canvas
// ####################################

/* ------------------ Part 1: Refactoring Old Code ------------------ */

// //Variables
// let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// // Memory allocation for future values
// let cell = ``;
// let row = ``;

// for (let i in string) {
//   //For index in string
//   if (string[i] == ',') {
//     row += cell + ' '; // Add cell to row
//     cell = ``; // Emtying cell to reuse
//   } else if (string[i] == '\n') {
//     row += cell; // Add final cell to row
//     cell = ``; // Clear cell
//     console.log(row); // Print row
//     row = ``; // Clear row
//   } else {
//     cell += string[i]; //If char, add to current cell
//   }

//   //If we reach final character in string, print final row
//   if (i == string.length - 1) {
//     //string.length is length of string - 114 - index is 114
//     row += cell; // Add final cell
//     console.log(row); // Print row
//   }
// }

/* ------------------ Part 1: Expanding Functionality ------------------ */

// Begin with the following task:
    // Declare a variable that stores the number of columns in each row of data within the CSV.
    // Instead of hard-coding four columns per row, expand your code to accept any number of
    //   columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create
// eight entries per row. You can safely assume that all rows that follow will contain the same number of
// entries per row.

// After you have implemented the above:
    // Store your results in a two-dimensional array.
    // Each row should be its own array, with individual entries for each column.
    // Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Memory allocation for future values
let cell = ``;
let row = ``;

let columns = 1;
//let line_counter = 1;
//let row_string = "";
let word = "";

let row_array = [];
let whole_array = [];

// iterate through the string to find number of columns per row
for(let i = 0; i < string.length; i++){
    if(string[i] == ","){
        columns++;
    }
    else if(string[i] == "\n"){
        break;
    }
  
}
//console.log(columns);

let str1 = "even,odd,natural"
let str2 = "complex,integer"
let str = "even,odd,natural\ncomplex,integer,float\n";
// console.log(str);
// row_array.push(str.split(","));
// row_array.push(str1.split(","));

// //console.log(row_array);

// for(let j = 0; j < str.length; j++){
    
//     if(str[j] != "\n"){
//         word += str[j];
//     }
//     else{
//         //str[j] = ",";
//         word = word.split(",");
//         row_array.push(word);
//         word = "";
        
//     }
    
// }

// console.log(row_array);

let comma_count = 0;
columns = 3;

// loop through whole string
for(let k = 0; k < str.length && comma_count < columns; k++){
    // while the string is not newline
    if(str[k] != "\n"){
        // as well as not a comma
        if(str[k] != ","){
            // append it to word
            word += str[k];
        }
        // ow
        else if(str[k] == ","){
            //
            row_array.push(word);
            word = "";
            comma_count++;
        }
    }
    else{

    }
}
console.log(row_array);

for (let i in str) {
  //For index in string
  if (string[i] == ',') {
    row += cell + ' '; // Add cell to row
    cell = ``; // Emtying cell to reuse
  } else if (string[i] == '\n') {
    row += cell; // Add final cell to row
    cell = ``; // Clear cell
    console.log(row); // Print row
    row = ``; // Clear row
  } else {
    cell += string[i]; //If char, add to current cell
  }

  //If we reach final character in string, print final row
  if (i == string.length - 1) {
    //string.length is length of string - 114 - index is 114
    row += cell; // Add final cell
    console.log(row); // Print row
  }
}

/* ------------------ Part 3: Transforming Data ------------------ */

// In order to make it more obvious what the data is, we will transform our rows into objects.
// Implement the following:

    /* For each row of data in the result array produced by your code above, create an object where the
       key of each value is the heading for that value’s column. */
            // Convert these keys to all lowercase letters for consistency.
    // Store these objects in an array, in the order that they were originally listed.
    /* Since the heading for each column will be stored in the object keys, you do not need to create an
       object for the heading row itself. */

let temp_array = [["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]];

let first_row = temp_array[0];
console.log(typeof first_row);
let empty_row = [];
console.log(typeof empty_row)
for(let i = 0; i < first_row.length; i++){
    empty_row.push(first_row[i].toLowerCase()); // note: using += will change empty_row into a string
}
console.log(empty_row);