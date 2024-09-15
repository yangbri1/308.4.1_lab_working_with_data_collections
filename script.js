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

/* Important: While this functionality can be built into the original CSV parser you built in Part 2, we are
intentionally creating two different algorithms to test different skillsets. Please leave these sections
separate even if it would be more efficient to combine them. */

// input given to start Part 3
let temp_array = [["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]];

// declare first_row to be the first array element found in temp_array;
let first_row = temp_array[0];

// empty array container to be appended to
let empty_row = [];

// convert each elements within first row into lowercase
for(let i = 0; i < first_row.length; i++){
    // first_row[i] = first_row[i].toLowerCase(); // this way directly converts the first array to lowercase
    empty_row.push(first_row[i].toLowerCase()); // Note: using += will change empty_row into a string
}

// removes the very first element (heading) the front of temp_array
temp_array.shift(temp_array); 

// declare empty array to collect the objects from below for-loop
let array_of_objects = [];

// loops through outer array (labeled both loops but did NOT even use break ...no need for distinction)
// decided against using forEach array method b/c want to access the element of the inner array
outer:for(let j = 0; j < temp_array.length; j++){ // Note: this will only cycle 4 times b/c only 4 outer elements

    // declare an empty object for later use below
    let empty_obj = {};

    // iterate via inner array element
    inner:for(let k = 0; k < temp_array[j].length; k++){ // Note: Coincidentally this will only run 4 times too

        // given that each column "heading" has a value underneath
        let heading = empty_row[k]; 

        // add a key of "heading" key : [[string]] value pair to empty_obj{}  
        empty_obj[heading] = temp_array[j][k];

    } // end of inner for-loop

    // append (in order) each object to the earlier declared empty array container
    array_of_objects.push(empty_obj);

} // end of outer for-loop

// print out the Part 3 results!
//console.log(array_of_objects);


/* ------------------ Part 4: Sorting and Manipulating Data ------------------ */

// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// 1. Remove the last element from the sorted array.
// 2. Insert the following object at index 1:
    // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// 3. Add the following object to the end of the array:
    // { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// So far, the results should look like this:
/* [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }] */
/* Finally, use the values of each object within the array and the array’s length property to calculate the
average age of the group. This calculation should be accomplished using a loop. */


// makes a copy of the array_of_objects array -- if don't want to change original array w/ .pop() below
let array_change = array_of_objects.concat();

// .pop() off last element from array using JavaScript built-in array method
array_change.pop();

// initialize an object of new id, name, occupation, age key w/ respective values as given
let obj_to_index_1 = {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
}

// .splice() JavaScript method allows add/remove elements to any place in the array
array_change.splice(1, 0, obj_to_index_1);

// .push() JavaScript method allows add elements to the end of an array
array_change.push({
    id: "7",
    name: "Bilbo",
    occupation: "None", 
    age: "111"});

console.log(array_change);

let mean_age = 0;
let age_count = 0;
console.log(typeof array_change[0].age);
// iterate via array of object profile
while(age_count < array_change.length){
    // assign the current profile to obj_profile variable
    let obj_profile = array_change[age_count];

    // use dot notation to retrieve the value connected to the age key
    mean_age += obj_profile.age;

    // increment by one to continue loop
    age_count++;

}
console.log(typeof mean_age, mean_age);
mean_age = mean_age / array_change.length;
//console.log(`The average age of this current group is ${mean_age}.`);

