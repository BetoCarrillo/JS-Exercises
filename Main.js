console.log("Starting javascript...")

//EXERCISE 1 Writing expressions with variables

let myDog = "Nano";
console.log(myDog);

//EXERCISE 2 Writing expressions with variables
let nanoAge = 17;
console.log(nanoAge);

//EXERCISE 3 Writing expressions with variables

let daniAge = 30;
let ageDiff = (nanoAge - daniAge);
console.log(ageDiff);

// EXERCISE 4 AGE COMPARISON 
if(nanoAge>=21) {
console.log("Nano is older than 21");
}
else { console.log("Nano is younger than 21") }

//EXERCISE 5 AGE COMPARISON

if (nanoAge < daniAge) { console.log("Nano is younger"); }

else if (nanoAge > daniAge) { console.log("Nano is older"); }

else {console.log("Same age"); }

//EXERCISE 6 Sorting an Array

let classNames = ["Alberto", "Emily", "Jan", "Phillip", "Raul"];
console.log(classNames[0])
console.log(classNames[4])
for (let i = 0; i<classNames.length; i++) { console.log(classNames[i]) };

//EXERCISE 7 Looping over an Array

const ageClass = [31, 28, 30, 35];
let i = 0;
while (i < ageClass.length) { console.log(ageClass[i]); i++; }

while (i < ageClass.length) {
    if (ageClass[i] % 2 == 0) console.log(ageClass[i]); i++;}

for (let i = 0; i < ageClass.length; i++) { console.log(ageClass[i])};

for (let i = 0; i < ageClass.length; i++)
    if (ageClass[i] % 2 == 0) {console.log(ageClass[i])};

// Functions that use Arrays:
//EXERCISE 8 Lowest number

function exEight() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0])
        {
             array[0] = array[i];
        }
    } console.log (array[0]);       
}
    
let array = [7, 2, 8, 1, 3, 0.8,9];
exEight(array) 

//EXERCISE 9 biggest numbers

function exNine() {
    for (let i = 0; i < biggestArray.length; i++) {
        if (biggestArray[i] > biggestArray[0])
        {
             biggestArray[0] = biggestArray[i];
        }
    } console.log (biggestArray[0]);       
}
    
let biggestArray = [7, 2, 17, 1, 3, 0.8,9];
exNine(biggestArray) 

//EXERCISE 10 Index value

function exTen(array, index) {
    for (let i = 0; i < array.length; i++){
        if (i === index) { console.log(array[i]); }
   } 
}

//var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 4;
exTen(array,index) 


// EXERCISE 11 Repeated values SMALL ISSUE W/JOINING



function exEleven(repeatedArray) {
    let repeated = [];
    for (let i = 0; i < repeatedArray.length; i++) {
        for (let j = i+1; j < repeatedArray.length; j++) {
            if (repeatedArray[i] === repeatedArray[j]) {
                if (!repeated.includes(repeatedArray[i])) {
                        repeated.push(repeatedArray[i]);
                    }     
                }
        }
    }
    return repeated;
}

let repeatedArray = [5,8,7,8,9,6, 8,9,7];
console.log(exEleven(array));


// EXERCISE 12 Converting Array into String

/* function exTw() {
console.log (myColor.join(', '))

}

myColor = ["Red", "Green", "White", "Black"];
exTw(); */


// JavaScript String
// EXERCISE 13 Reverse number

/* function exFif() {

     const string = num.split(" ");  
     for (let i = 0; i < string.length; i++) {
          
         string[i] = num.toString().split('').reverse().join('');
} 
     console.log(string.join());       
}
    
const num = "3456";
 exFif(num)  */
 

// EXERCISE 14 alphabetical order

/* let x = "webmaster"
function exFour() {
    console.log(x.split('').sort().join(''));
    
}

exFour (x) */

// EXERCISE 15 Uppercase first letter of each word

/* function exFif() {
  const words = sentence.split(" ");  
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
   
}
    const newArray = words.join(' ');
    return newArray
    console.log(newArray);
}
const sentence = "prince of persia";
console.log(exFif(sentence)); */


// EXERCISE 16

/* function exSix() {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
 str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    console.log(word);

};
const string = "Web Development Tutorial";
exSix(string); */


//EPIC 2: DOM MANIPULATION
// EXERCISE 17 

/* function addBands(myBandList) {
    
    for (let i = 0; i < myBandList.length; i++) { 
        const place = document.getElementById('band-list');
    const bandList = document.createElement('li');
        bandList.appendChild(document.createTextNode(myBandList[i]));
        place.appendChild(bandList);
    }
}

let myBandList = ["Bob Marley", "Mac Miller", "Phill Collins"]
addBands(myBandList)
 */

//EXERCISE 18 

function generateTable(row, col) {
    const place = document.body;
    const table = document.createElement('table');
    place.appendChild(table);
    table.setAttribute("border", "2") ;
    table.setAttribute("color", "blue");   
   for (let j = 0; j < row; j++) {
            let createRow = table.insertRow();
       createRow.innerHTML = "Row";
        for (let i = 0; i < col; i++) {
                const cells = createRow.insertCell();
            cells.innerHTML = "cell";
            console.log(cells)
            
        }    
    }
    console.log(table);  
} 

let multiplicationTable = [4,3]
generateTable(multiplicationTable[0],multiplicationTable[1] )

    //const cell = addRow.insertCell();

/* multiplicationTable[0]
multiplicationTable[1]

  for (let i = 0; i < multiplicationTable.length; i++) {
        if (multiplicationTable[0]) { console.log(returnone) }
    else {console.log(returntwo)};
}; 
    
    table.setAttribute("tr", row);
    table.setAttribute("col", column)
 */


  /*       for (let i = 0; i < multiplicationTable.length; i++) {
        (row = multiplicationTable[i] * table.insertRow());
    }  

    
    for (let j = 0; j === multiplicationTable[1]; i++) {
       (table.insertCell())*multiplicationTable[i]
   break;}
    console.log(table);  */




/*     function generateTable(column, row) {
    const place = document.getElementsByTagName('section');
    const table = document.createElement('table');
    const tBody = document.createElement('tbody'); 
    for (let i = 0; i < multiplicationTable[0]; i++){
        const addRow = table.insertRow(); 
    }
    
    addRow.innerHTML = "<b>Row</b>";
    addRow.setAttribute = 
    console.log(table);    
} 

let multiplicationTable = (4,8)
generateTable(multiplicationTable) */