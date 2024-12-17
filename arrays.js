// --- JS arrays --- 

// - 1 - 
// Get nth element of array: Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

function myFunction1(a, n){

    return a[n-1];
    // a[n] - indexarea incepe de la 0.
    // a[n-1] - indexarea incepe de la 1.
}

myFunction([1,2,3,4,5],3) // expected 3

//--------------------------------------------------------------------------------------------

// - 2 - 
// Remove first elements of an array: Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'.

function myFunction2(a){
    return a.slice(3);
}

myFunction([1,2,3,4]) // expected [4]

// ------------------------------------------------------------------------------------------------

// - 3 - 
// Get last elements of an array: Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. 

function myFunction3(a){
    return a.slice(-3);
}

myFunction3([1,2,3,4]) // expected [2,3,4]

// - 4 -
// Get first element of an array: Write a function that takes an array (a) as argument. Extract the first 3 elements of a

function myFunction4(a){
    return a.slice(0,3);
}

myFunction4([1,2,3,4,5]); // expected [1,2,3]

//---------------------------------------------------------------------------------------------

// - 5 - 
// Return last n array elements: Write a function that takes an array (a) and a number (n) as arguments

function myFunction5(a, n){
    return a.slice(-n);
}

myFunction5([1,2,3,4,5], 2); // expected [4,5]

// ------------------------------------------------------------------------------------------

// - 6 -
// Remove a specific array element: Write a function that takes an array (a) and a value (b) as argument. 
// The function should remove all elements equal to 'b' from the array.

function myFunction6(a, b) {
    return a.filter(elem => elem !== b);
}

myFunction6([1,2,3], 2);

//-------------------------------------------------------------------------------------------

//- 7 -
//Count number of elements in JS array

function myFunction7(a){
    return a.length;
}

myFunction7([1,2,2,4]) // expected 4

//-------------------------------------------------------------------------------------------

// - 8 -
// Count number of negative values in array: 
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array.

function myFunction8(a){
    return a.filter(element => element < 0).length;
}

myFunction8([1,-2,2,-4]); // expected 2
// filter - metoda array care creeaza un nou array, filtrand elementele care respecta o anumita conditie:
// conditia este definita de functia din paranteze

//--------------------------------------------------------------------------------------------

// - 9 -

// Sort an array of strings alphabetically: Write a function that takes an array of strings as argument. 
// Sort the array elements alphabetically.

function myFunction9(arr){
    return arr.sort();
}

myFunction(['b', 'c', 'd', 'a']) // Expected ['a', 'b', 'c', 'd']

//---------------------------------------------------------------------------------------------

// - 10 -
// Sort an array of numbers in descending order: 

function myFunction10(arr){
    return arr.sort().reverse();
}

myFunction([1,3,2]); // expected [3,2,1]

// - 11 -
// Calculate the sum of an array of numbers: 
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function sumNumbers(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
}

myFunction([10,100,40]) // expected 150

// alta solutie cu ciclul for: 

function myFunction11(num){
    let sum = 0; // initializam suma
    for(let i = 0; i < num.length; i++){
        sum += num[i]; // adaugam fiecare element la suma
    }
    return sum; // returnam suma finala
}

// - 12 - 
// Return the average of an array of numbers: 
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function avg(arr){
    // count number of elements
    arr.length;
    // calculate the sum of an array of numbers cu ciclul for: 
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum += arr[i]; // adaugam fiecare element la suma
    }
    return sum / arr.length;
}

avg([10,100,40]); // expected 50

// alta solutie: 

function avg(arr){
    arr.length;
    let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    return sum / arr.length;
}


// - 13 - 
// Return the longest string from an array  of strings

function getLongestString(arr){
    let longestWord = "";
    let charCount = 0;

    for (let i = 0; i< arr.length; i++){
        if(arr[i].length > charCount){
            longestWord = arr[i];
            charCount = arr[i].length;

        }
    }

    return longestWord;
}

getLongestString(['unu', 'trei', 'patru']);

// alta solutie a exercitiului: 
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
}


function getLongestString (array) {
    return  array.reduce(
       function (str1, str2) {
          return str1.length > str2.length ? str1 : str2;
      }
     )
}


//---------------------------------------------------------------------------------------------

// - 14 - 
// Check if all array elements are equal
// Write a function that takes an array as argument. 
// It should return true if all elements in the array are equal. 

function checkArray(arr){
    // 1. verificam daca array este gol: 
    if(arr.length === 0){
        return true;
    }

    // 2. comparam fiecare element cu primul element din array:
    
    const firstElement = arr[0];
    for (let element of arr){
        if (element !== firstElement){
            return false;
        }
    }
    return true;
}

// a doua varianta a exercitiului, folosind new Set: 

function checkArr(arr){
    return new Set(arr).size === 1;
}

// Set - elimina duplicatele, raman doar valorile unice
// Set().size - proprietatea lui Set returneaza numarul de valori unice din Set

checkArr([1,1,1,2]) // expected false
checkArray(['test', 'test', 'test']) // excepted true

//---------------------------------------------------------------------------------------------

// - 15 -
// Merge an arbitrary number of arrays:

// prima varianta, cu concat: 

function myFunction15(...arrays){
    return [].concat(...arrays)
}

// [].concat(...arrays) - combina toate elementele din array primite intr-un singur array
myFunction15([1, 2, 3], [4, 5, 6]) // expected [1, 2, 3, 4, 5, 6]

// a doua varianta, cu flat:

function mergeArrays(...arrays){
    return arrays.flat();
}
// flat - o metoda ce transforma un array multidimensional intr-un array unidimensional

mergeArrays([1, 2, 3], [4, 5, 6]) // expected [1, 2, 3, 4, 5, 6]

//----------------------------------------------------------------------------------------------

// - 16 - 
// Sort array by object property
// Write a function that takes an array of objects as argument. 
// Sort the array by property b in ascending order. Return the sorted array

function myFunction16(arr){
    return arr.sort((a,b) => a.b - b.b);
}

// arr.sort - metoda care sorteaza array in loc, modifica direct array-ul original
// functia de comparatie: (a,b) => a.b - b.b - comparam proprietatea b a fiecarui obiect

myFunction([{a:1,b:2},{a:5,b:4}]) // expected [{a:1,b:2},{a:5,b:4}]

//-------------------------------------------------------------------------------------------------------

// - 17 - 
// Merge two arrays with duplicate values
// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. 
// Sort the merge result in ascending order. 

function myFunction17(a,b){
    //1.combinam ambele array folosind operatorul spread: 
    const mergedArray = [...a, ...b];

    //2. eliminam duplicatele prin metoda Set: 
    const uniqueArray = [... new Set(mergedArray)];

    //3. sortam rezultatul in ordine crescatoare:
    uniqueArray.sort((a,b) => a - b);

    //4.returnam array-ul rezultat:
    return uniqueArray;
}

myFunction17([1, 2, 3], [3, 4, 5]) // expected [ 1, 2, 3, 4, 5 ]

//operatorul SPREAD - pentru a despacheta elementele din cele doua array si a le pune impreuna intr-un singur array

// alta solutie: 

function myFunction17(a,b){
    return [...new Set([...a, ...b])].sort((x,y) => x - y);
}

//-----------------------------------------------------------------------------------------------

// - 18 - 
// Sum up all array elements with values greater than: 
// Write a function that takes an array (a) and a number (b) as arguments. 

function sumGreater(a, b){
    // 1. filtram elementele mai mari decat b
    const filterArray = a.filter(element => element > b);

    // 2. calculam suma elementelor filtrate:
    const sum = filterArray.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

sumGreater([78, 99, 100, 101, 401], 99) // expected 602

// alta solutie: 

function myFunction(a, b) {
    return a.reduce((sum, cur) => {
      if (cur > b) return sum + cur;
      return sum;
    }, 0);
}

//-------------------------------------------------------------------------------------

// - 19 - 
// Create a range numbers
// Write a function that takes two numbers (min and max) as arguments. 
// Return an array of numbers in the range min to max

function myFunction19(min, max){
    const result = [];
    for(let i = min; i<=max; i++){
        result.push(i);
    }
    return result; 
}

myFunction19(2, 10) // expected [2, 3, 4, 5, 6, 7, 8, 9, 10]

//-----------------------------------------------------------------------------------------------

// - 20 -
// Group array of strings by first letter:
// Write a function that takes an array of strings as argument. Group those strings by their first letter. 
// Return an object that contains properties with keys representing first letters.

function groupByFirstLetter(arr){
    // 1. cream obiect gol, care contine proprietati pentru fiecare litera: 
    const result = {};

    // 2. parcurgem fiecare element din array, folosid foreach
    arr.forEach(element => {
        const firstLetter = element[0].toLowerCase(); 
        // elelemnt[0] - extrage prima litera a stringului

        // 3. verificam daca exista deja un array pentru acea litera 
        if(!result[firstLetter]){
            result[firstLetter] = [] // verificam daca in obj result exista deja o proprietate cu cheia filterLetter
        }
        result[firstLetter].push(element);
    });

return result;
}

groupByFirstLetter(['Alf', 'Alice', 'Ben']) //expected { a: ['Alf', 'Alice'], b: ['Ben']}

// alta solutie: 

function myFunction(arr) {
    return arr.reduce((acc, cur) => {
      const firstLetter = cur.toLowerCase().charAt(0);
      return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    }, {});
}

//-----------------------------------------------------------------------------------------------

// - 21 - 
// Define an array with conditional elements
// Write a function that takes an array with arbitrary elements and a number as arguments. 
// Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6.


function myFunction21(arr, num){
// 1. verificam daca num < 6
    if(num < 6){
        return [0, ...arr];
    } else {
        return [num, ...arr];
    }
}

myFunction21([1,2,3], 6) // expected [6,1,2,3]

// alta solutie: 
function myFunction21(arr, num) {
    return [...(num > 5 ? [num] : [0]), ...arr];
}

//--------------------------------------------------------------------------------------------

// - 22 - 
// Get every nth element of array 
// Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array.

function getElement(a, n){
    const result = [];

    // parcurgem array-ul original in pasi de n: 
    for(let i = n - 1; i < a.length; i += n){
        // incepem de la let i = n - 1 - array fiind indexate de la 0, pentru a salva fiecare n-lea element, trebuie sa incepem de la n - 1
        // i += n - dupa fiecare pas vom sari cate n element
        result.push(a[i]); // adaugam fiecare n-lea element in result
    }
    return result; // returnam noul array

}

// rezultatul autorului: 
function myFunction(a, n) {
    let rest = [...a];
    let result = [];
    for (let i = 0; i < a.length; i++) {
       if (rest.length < n) break;
       result.push(rest[n - 1]);
       rest = rest.slice(n);
    }
    return result;
}

getElement([1,2,3,4,5,6,7,8,9,10],3); // Expected [3,6,9]