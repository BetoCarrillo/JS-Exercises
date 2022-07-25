console.log("Starting javascript...")

//EXERCISE 1

let myDog = "Nano";
//console.log(myDog);

//EXERCISE 2
let nanoAge = 17;
//console.log(nanoAge);

//EXERCISE 3 

let daniAge = 30;
let ageDiff = (nanoAge - daniAge);
//console.log(ageDiff);

// EXERCISE 4
if(nanoAge>=21) {
    //console.log("Nano is older than 21");
}
//else { console.log("Nano is younger than 21") }

//EXERCISE 5

//if (nanoAge < daniAge) { console.log("Nano is younger"); }

//else if (nanoAge > daniAge) { console.log("Nano is older"); }

//else {console.log("Same age"); }

//EXERCISE 6

let classNames = ["Alberto", "Emely", "Jan", "Phillip", "Raul"];
//console.log(classNames[0])
//console.log(classNames[4])
//for (let i = 0; i<classNames.length; i++) { console.log(classNames[i]) };

//EXERCISE 7

const ageClass = [31, 28, 30, 35];
//let i = 0;
//while (i < ageClass.length) { console.log(ageClass[i]); i++; }

//while (i < ageClass.length) {
    //if (ageClass[i] % 2 == 0) console.log(ageClass[i]); i++;}

//for (let i = 0; i < ageClass.length; i++) { console.log(ageClass[i])};

//for (let i = 0; i < ageClass.length; i++)
    //if (ageClass[i] % 2 == 0) {console.log(ageClass[i])};


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

//EXERCISE 9

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

//EXERCISE 10

function exten(array, index) {
    for (let i = 0; i < array.length; i++){
        if (i === index) { console.log(array[i]); }
   } 
}

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 4;
exten(array,index)

// EXERCISE 11

