//Arrays in JS

const historyMarks = [10,20,13,14,15,9,8];
console.log(historyMarks);
console.log(historyMarks[8]);
historyMarks[0] = 20;
console.log(historyMarks);
const studentDetails = ['Alex', 1995, 'Dancing'];
console.log(studentDetails);
const arr = new Array('Riya', 'Rahul', 'Sonam');
console.log(arr);

//Arrays in JS are Dynamic

const cities = [
    "Mumbai", "Delhi", "Calcuta", "Jaipur", "Chennai"
];
console.log(cities.length);
cities[2] = "Kolkata";
console.log(cities);


//Push operation -> phle add krna hota koi bhi cheez ko
const teams = ["Csk", "Rcb", "MI", "LSg"];
teams.push("GT");
console.log(teams);
//Unshift
teams.unshift('KKR');
console.log(teams);

//Removing an element
//pop
teams.pop();
teams.pop();
console.log(teams);
//check the RCB is present or not
//indexOf
const RCBIndex = teams.indexOf('RCB');
console.log(RCBIndex);
const gtIndex = teams.indexOf('GT');
console.log(gtIndex);

//includes()
const rcbIncludes = teams.includes('RCB');
console.log(rcbIncludes);

//slice() and splice()
console.log(teams);
console.log(teams.slice(2));
console.log(teams);

//splice = means add  and delete something
teams.splice(2,1,"GT");
console.log(teams);

//concat()

const teams2 = ["India", "Australia", "Newzeland"];
const mergedTeams = teams.concat(teams2);
console.log(mergedTeams);

///** loop Over Arrays */
const Students = [
    'Tina', 'Raj', 'Babby', 'Seema', 'Alex', 'Sita', 'Shyam'
];
for(let i = 0; i<Students.length;i++){
    console.log('Roll No ${i + 1}: ${Students[i]}');
}

//for .. in loop
for(let i in Students){
    console.log(
        'Roll No ${Number(i) + 1}: ${Students[i]}'
    );
}
//for .. of loop
for(let student of Students){
    console.log(student);
}

//Rest Vs Spread operator
const aprilBatch = ['Tina', 'Madhur'];
const mayBatch = ['Ritik', 'Deepak', 'Shalini'];
const juneBatch = ['Saba', 'Shivani'];
const julyBatch = [];

/*
function addStudent(batch, student){
    batch.push(student);
    console.log(batch);
}
addStudent(aprilBatch, 'Ritu');
addStudent(mayBatch, 'Sunny');
*/

//Rest ...
function addStudents(batch, ...students){
    for(let i of students){
        batch.push(i);

    }
    console.log(batch);
}
addStudents(
    aprilBatch,
    'Sunny', 'Ritu', 'Sheena'
);

//Spread ...
// Expand/ coping
const newBatch = [...mayBatch];
console.log(newBatch);
mayBatch.push('newStudent');
console.log(mayBatch);
console.log(mayBatch);

//Concatenate
const mergeBatch = [...mayBatch, ...juneBatch];
console.log(mergeBatch);


//Break Vs continue
const inputs = [11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];
const evenNumbers = [];
for(let i of inputs){
    if(i % 2 !== 0){
        continue;
    }
    evenNumbers.push(i);
    if(evenNumbers.length === 5){
        break;
    }
    console.log(evenNumbers);
}


    console.log(evenNumbers);

// String Traversal
function countChars(str, ch){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str.charAt(i) === ch){
            count++;
        }
    }
    console.log(
        'Occurences of character ${ch} is: ${count}'
    );
}
let str = 'javaScript is an amazing language.';
let charToFind = 'i';
countChars(str, charToFind);

//Methods in String
let str = 'Javascript is a Dynamically programming language.';
// Includes()
console.log(str.includes('is'));

//replace()
console.log(str.includes('a', 'is'));

//replaceAll()
//trim()
console.log(str.trim());
//substring()
console.log(str.substring(3,10));
console.log(str.substring(-4));
//slice()
console.log(str.slice(-9, -3));

// split()
let words = str.split(' ,');
console.log(words);


