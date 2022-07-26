console.log("Starting javascript...")

//EXERCISE 1 Writing expressions with variables

let myDog = "Nano";
//console.log(myDog);

//EXERCISE 2 Writing expressions with variables
let nanoAge = 17;
//console.log(nanoAge);

//EXERCISE 3 Writing expressions with variables

let daniAge = 30;
let ageDiff = (nanoAge - daniAge);
//console.log(ageDiff);

// EXERCISE 4 AGE COMPARISON 
if(nanoAge>=21) {
    //console.log("Nano is older than 21");
}
//else { console.log("Nano is younger than 21") }

//EXERCISE 5 AGE COMPARISON

//if (nanoAge < daniAge) { console.log("Nano is younger"); }

//else if (nanoAge > daniAge) { console.log("Nano is older"); }

//else {console.log("Same age"); }

//EXERCISE 6 Sorting an Array

let classNames = ["Alberto", "Emely", "Jan", "Phillip", "Raul"];
//console.log(classNames[0])
//console.log(classNames[4])
//for (let i = 0; i<classNames.length; i++) { console.log(classNames[i]) };

//EXERCISE 7 Looping over an Array

const ageClass = [31, 28, 30, 35];
//let i = 0;
//while (i < ageClass.length) { console.log(ageClass[i]); i++; }

//while (i < ageClass.length) {
    //if (ageClass[i] % 2 == 0) console.log(ageClass[i]); i++;}

//for (let i = 0; i < ageClass.length; i++) { console.log(ageClass[i])};

//for (let i = 0; i < ageClass.length; i++)
    //if (ageClass[i] % 2 == 0) {console.log(ageClass[i])};

// Functions that use Arrays:
//EXERCISE 8 Lowest number

/* function exeight() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0])
        {
             array[0] = array[i];
        }
    } console.log (array[0]);       
}
    
let array = [7, 2, 8, 1, 3, 0.8,9];
exeight(array) */

//EXERCISE 9 biggest numbers

/* function exnine() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[0])
        {
             array[0] = array[i];
        }
    } console.log (array[0]);       
}
    
let array = [7, 2, 17, 1, 3, 0.8,9];
exnine(array) */

//EXERCISE 10 Index value

/* function exten(array, index) {
    for (let i = 0; i < array.length; i++){
        if (i === index) { console.log(array[i]); }
   } 
}

//var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 4;
exten(array,index) */

//EXERCISE 8

/* function exeight() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0])
        {
             array[0] = array[i];
        }
    } console.log (array[0]);       
}
    
let array = [7, 2, 8, 1, 3, 0.8,9];
exeight(array) */

// EXERCISE 11 Repeated value - NOT DONE YET

function exeleven(item, i) {
    for (let i = 0; i < array.length; i++){ 
        if (array.findIndex[item] !== i) {
         console.log (exeleven); 
        }
    } 
    
}

let array = [7, 5,  2,2, 8, 1, 3, 0.8,9];
exeleven() 
 

// EXERCISE 12 Converting Array into String

/* function extw() {
console.log (mycolor.join(', '))

}

mycolor = ["Red", "Green", "White", "Black"];
extw(); */


// JavaScript String
// EXERCISE 13 Reverse number

/* function exfif() {

     const string = num.split(" ");  
     for (let i = 0; i < string.length; i++) {
          
         string[i] = num.toString().split('').reverse().join('');
} 
     console.log(string.join());       
}
    
const num = "3456";
 exfif(num) 
 */

// EXERCISE 14 alphabetical order

/* let x = "webmaster"
function exfour() {
    console.log(x.split('').sort().join(''));
    
}

exfour (x) */

// EXERCISE 15 Uppercase first letter of each word

/* function exfif() {
  const words = sentence.split(" ");  
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
    console.log(words.join(' '));
}
const sentence = "prince of persia";
 exfif(sentence) */


// EXERCISE 16

/* function exsix() {
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
exsix(string);
 */








