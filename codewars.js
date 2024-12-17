 // - 1 - Find the smallest integer in the array

function findSmallestInt(arr){
    let currentMin = arr[0]; // prin index - indicam primul numar din array
    for(let i = 0; i<arr.length; i++){
        if(arr[1] < currentMin){
            currentMin = arr[i];
        }
    }
    return currentMin;
}

findSmallestInt([5, 8,2,9,56]); // => 

// Concluzie: 

//-----------------------------------------------------------------------------------------

// - 2 - Get the mean of an array: calculate rounted average of marks array

// prima modalitate, atilizand metoda reduce:
function getAverage(marks){
    return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
}

// a doua modalitate: 

function getAverage(arg){
    arg.length;
    let acc = 0;
    for(let i = 0; i < arg.length; i++){
        acc += arg[i];
        
    }
    return acc / arg.length;
}

getAverage([2, 3, 4]);

//------------------------------------------------------------------------------------------

// - 3 - Reversed sequence
// Get the number n(n>0) to return the reversed sequence from n to 1

function reversedSequence(n){
    const reversed = [];
    for(let i = n; i > 0; i--){
        reversed.push(i);
    }
    return reversed;
}

reversedSequence(6);


// ------------------------------------------------------------------------------------------

// - 4 - Student's Final Grade: 

function finalGrade(exam, projects){
    if(exam > 90 || projects > 10 ){
        return 100;
    } else if(exam > 75 && projects >= 5){
        return 90;
    } else if(exam > 50 && projects >=2){
        return 75;
    } else 
    return 0;
}

finalGrade(100, 5); // 100
finalGrade(50, 5); // 0

// -------------------------------------------------------------------------------------------

// - 5 - Print a Rectangle Using Asterisks
// Write a method that given two arguments, width and height, return a string representing a rectangle with those dimensions.
// The rectangle should be filled with space and borders with *
/* excepted:  ***
              * *
              *** */

function getRectangleString(width, height){
    const space = '\r\n';
    const tb = '*'.repeat(width) + space;
    const center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + space).repeat(height - 2): '';
    return height > 1 ? (tb + center + tb) : tb.repeat(height);
}

getRectangleString(3,4);

// ------------------------------------------------------------------------------------------

// - 6 - Convert to Binary
//Given a non-negative integer n, write a function toBinary/ToBinary witch returns that number in a binary format.

// function declaration:
function toBinary(n){
    return Number(n.toString(2)); // in loc Number putem folosi semnul + => return +(n.toString(2));
}

// ca sa schimbam functia in function expresion: 
const toBinaryExp = n => +n.toString(2); // function expresion

//--------------------------------------------------------------------------------------------

// - 7 - Find the missing element between two arrays:

function findMissing(arr1, arr2){
    let index;
    for(let i = 0; i < arr1.length; i++){
        index = arr2.indexOf(arr1[i]);
        if(index > -1 ){
            arr2.splice(index, 1);
        } else {
            return arr1[i];
        }
    }
}

findMissing([1,2,2,3], [1,2,3]); // excepted => 2

// alta solutie: 

function findMissing(arr1, arr2){
    arr1.sort();
    arr2.sort();

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return arr1[i];
        }
    }
}

findMissing([1,2,2,3], [1,2,3]);

// - 8 - Return the type of the sum of the two arguments

   // - 1 - 
function typeOfSum(a,b){
    return typeof(a + b);
}

  // - 2 - Count Odd Numbers below n 

function oddCount(n){
    return Math.floor(n/2);
}

  // - 3 - Write a function called repeatStr which repeats the given string exactly n times 

function repeatStr(n, s){
    return s.repeat(n);
}

repeatStr(3, 'hello') // expected: 'hellohellohello'
  
  // - 4 - 

function betterThanAverage(classPoints, yourPoints){
    
    return classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length < yourPoints;
    

  }

betterThanAverage([5, 7], 5) // excepted true


// - 9 - Sleigh Authentication

function authenticate(name, password){
    
    return name === "Santa Claus" && password === "Ho Ho Ho";

}

authenticate("Santa Claus", "Ho Ho Ho"); // true
