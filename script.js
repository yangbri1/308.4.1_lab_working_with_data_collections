// ####################################
// # Lab 308.4.1: Working with Data Collections
// # Brian Yang
// # Submit Github Link to Canvas
// ####################################


/* ------------------ Part 1: Refactoring Old Code ------------------ */
console.log(`\n/* ------------------------ Part 1: Refactoring Old Code ------------------------ */`)

/* Instead of creating two separate loops , where one is for just extracting a line using the "\n"
as a delimiter and another loop to loop through the row further separating them by commas. Later calling
them over and over again using functions to place them into separate columns. Here is a much more efficient
shown in class warmup by Dylan */

// given string to manipulated 
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// declaration block of variables 
let word = "";
let row = "";

// cycles through the given string above
for(let i = 0; i < string.length; i++){
  
    // if the character is a comma ...
    if(string[i] === ','){

        // append the "word" alongside a ' ' space for desired formatting to row
        row += word + ' ';

        // empty string "word" so it could grab a new word w/o attaching it to last
        word = ``; 

    } 
    
    // if the string were to be a newline esc char -- indicating end of line here
    else if(string[i] === "\n"){

        // concatenate the word to row w/o a space 
        row += word; 

        // clear the string to continue taking in next row's word
        word = ""; 

        // output the given string in rows layout
        console.log(row); 

        // afterwards clear row for upcoming row
        row = ""; 

    } 

    // if char is neither commas nor "\n" ...
    else {

        // recursively add the char to word
        word += string[i]; 

    }

    // to catch the final row ...
    if (i == string.length - 1) {

        // append last word to last row
        row += word; 
        
        // print out the last row
        console.log(row); 

    }
} // end of string format for-loop
console.log("\n");

/* ------------------ Part 2: Expanding Functionality ------------------ */
console.log(`/* ----------------------- Part 2: Expanding Functionality ----------------------- */`);


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


// given string to manipulated 
// let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// declaration block of variables 
// let word = "";
// let row = "";
let row_ary = [];

// 2D array will be cache to this
let main_array = [];

// iterates via the whole string
for(let i = 0; i < string.length; i++){
  
    // if the current iteration character is a comma
    if (string[i] == ','){
        
        // apply JS array .push() method, pushing "word" to "row_ary",
        // ... since it had finished appending char for a word
        row_ary.push(word);

        // clear away the "word" values for next word
        word = ""; 

    } 

    // if the character is a "\n" esc char
    else if (string[i] == '\n') {
        
        // .push() "word" contents to array row_ary as "\n" here
        // ... also indicates enough char is there for a word
        row_ary.push(word);

        // .push() the array "row_ary" to "main_ary" as an element
        // as it is the end of a row/line
        main_array.push(row_ary);
        
        // clear "word" content more concatenating
        word = ""; 
        // clear row_ary to concatenate more word entries
        row_ary = [];

    } 

    // otherwise: any other characters
    else{

        // include them to string "word"
        word += string[i]; 
    }

    // Note: last row does NOT end w/ an newline so it would NOT be detected
    //       using the conditionals above. Hence, this one is a special one
    //       just to catch the last row
    if(i == string.length - 1){
    
        // .push() last word to row_ary
        row_ary.push(word);

        // .push() array "row_ary" to "main_ary" as an array element
        main_array.push(row_ary);
    
    }

    // not here else it would push every cycle (114 times since there are 114 characters)
    // main_array.push(row_ary); 

} // end of array of arrays for-loop block

// output the original given string as an array of arrays
console.log(main_array);


/* ------------------ Part 3: Transforming Data ------------------ */
console.log("/* ----------------------- Part 3: Transforming Data ----------------------- */");


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

} // end of array of objects(key:value pairs -- entries) for-loop

// print out the Part 3 results!
console.log(array_of_objects, "\n");


/* ------------------ Part 4: Sorting and Manipulating Data ------------------ */
console.log('/* ------------------ Part 4: Sorting and Manipulating Data ------------------ */');


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

// sort the entire array as instructed -- for no change to OG array use toSorted)() method
array_change.sort();

// .pop() off last element from array using JavaScript built-in array method
array_change.pop();

// initialize an object of new id, name, occupation, age key w/ respective values as given
const obj_to_index_1 = { // or declare w/ "let" works too
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
}

// .splice() JavaScript method allows add/remove elements to any place in the array
array_change.splice(1, 0, obj_to_index_1);

// .push() JavaScript method allows add elements (here an object) to the end of an array
array_change.push({
    id: "7",
    name: "Bilbo",
    occupation: "None", 
    age: "111"
});

// declare block of variables for later use 
let mean_age = 0;
let age_count = 0;
// console.log(typeof array_change[0].age);

// iterate via array of object profile
while(age_count < array_change.length){
    // assign the current profile to obj_profile variable
    let obj_profile = array_change[age_count];

    // use dot notation to retrieve the value connected to the age key and
    // ... Number to typecast it from string to number
    mean_age += Number(obj_profile.age);

    // increment by one to continue loop
    age_count++;

} // end of group's average age calculation loop

//console.log(typeof mean_age, mean_age);

// calculate the average age of the group
mean_age = mean_age / array_change.length;

// console.log() block of results
console.log(array_change, "\n");
console.log(`The average age of this current group is ${mean_age} years old.\n`);

/* ------------------ Part 5: Full Circle ------------------ */
console.log("*/---------------------------- Part 5: Full Circle ---------------------------- /*");


// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!


// console.log(array_change.flat()); // well flat() array method didn't squash it 

// call the Object.keys() method an attribute of the Object.prototype to retrieve the actual key names
let back_to_str = Object.keys(array_change[0]) + "\n";
// let interim_array = [];

// console.log(typeof back_to_str);
// console.log(array_change[0].age);

// iterate via array_change (array of profile objects)
for(let m = 0; m < array_change.length; m++){
    // console.log(array_change[m]);
    
    /* Method #1: iterate through each object element and manually concatenate to str */
    // if it was the last object do NOT add the newline "\n" escape character/sequence to the end
    // if(m == array_change.length){
    //     back_to_str += array_change[m].id + ',' + array_change[m].name + ',' + array_change[m].occupation + ',' + array_change[m].age;
    // }

    // otherwise concatenate this full format into the declared "back_to_str" string variable
    //else{
    back_to_str += array_change[m].id + ',' + array_change[m].name + ',' + array_change[m].occupation + ',' + array_change[m].age + "\n";
    //}

    /* Method #2: utilize built-in JavaScript Object.prototype attributes */
    // nearly equivalent to above two conditionals but invoking the Object.values() method here
    //back_to_str += Object.values(array_change[m]) + "\n";

    /* Method #3: JSON.stringify(array_change[m]) ??? */
} // end of back to string format loop

//console.log(back_to_str);

// console.log() out a copy of "back_to_str" using the JS built-in String.substring method w/o the last elem ("\n")
console.log(back_to_str.substr(0, back_to_str.length - 1));
