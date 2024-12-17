// - 1 - Accesing object properties one
// Write a function that takes an object with two properties as argument. 
// It should return the value of the property with key country.

function myFunction1(obj){
    return obj.country;
}

myFunction1({ continent: 'Asia', country: 'Japan' }) // expected 'Japan'

// ------------------------------------------------------------------------------------------

// - 2 - Accessing object properties two: 
// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. 
// Hint: you might want to use the square brackets property accessor

function myFunction2(obj){
    return obj[prop-2];
}

myFunction2({  one: 1,  'prop-2': 2}) // expected 2

// -------------------------------------------------------------------------------------------

// - 3 - Accessing object properties three

function myFunction3(obj, key){
    return obj[key];
}

myFunction3({  continent: 'Asia',  country: 'Japan'}, 'continent') // expected 'Asia'

// --------------------------------------------------------------------------------------------

// - 4 - Check if property exists in object:
// Write a function that takes an object(a) and string(b) as argument.
// Return true if the object has a property with key 'b'

function myFunction4(a, b){
    return b in a;
}

myFunction4({a:1,b:2,c:3},'b') // expected true

//---------------------------------------------------------------------------------------------

// - 5 - Check if property exists in object and is truthy
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

function myFunction5(a, b){
    return Boolean(a[b]);
}

myFunction5({a:1,b:2,c:3},'b') // expected true

//--------------------------------------------------------------------------------------------

// - 6 - Creating JS objects one
// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string

function myFunction6(a){
    return {key: a};
}

myFunction6('a'); // expected {key:'a'}

//---------------------------------------------------------------------------------------------------

// - 7 - Creating JS objects two
// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'.

function myFunction7(a, b){
    const obj = {[a]: b};
    return obj;
}
myFunction7('a','b') //xpected {a:'b'}

// - 8 - Creating JS objects three
// Write a function that takes two arrays as arg. Create an object that has properties with keys 'a' and corresponding values 'b'.

function myFunction8(a, b){
    let result = {};
    // folosim un ciclu pentru a parcurge 
    for(let i = 0; i< a.length; i++){
        result[a[i]] = b[i];
    }
    return result; 
}
let keys = ['a', 'b', 'c'];
let values = [1, 2, 3];


myFunction8(['a','b','c'],[1,2,3]); // Expected {a:1,b:2,c:3}


// a doua solutie, folosind metoda reduce() si folosinf o functie callback:

function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
 }

 // sintaxa reduce: array.reduce((acc, currValue, currIndex) => {}, initialValue)

 //-------------------------------------------------------------------------------------------

 // - 9 - Extract keys from JS obj
 // Write a function that takes an object (a) as argument. Return an array with all object keys.

function myFunction9(a){
    return Object.keys(a);
}
const myObject = { name: 'Alice', age: 25, job: 'Developer' };
myFunction9(myObject);

myFunction9({a:1,b:2,c:3}) // expected ['a','b','c']

//-------------------------------------------------------------------------------------------

// - 10 - Return nested object property
// Write a function that takes an object as argument. 
// In some cases the object contains other objects with some deeply nested properties.

function myFunction10(obj){
    return obj?.a?.b;
}

// a doua solutie: 

function myFunction10(obj){
    return obj && obj.a && obj.a.b;
}

myFunction10({a:{b:{c:3}}}); // expected {c:3}

// ------------------------------------------------------------------------------------------

// - 11 - Sum object values
// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction11(){
    let sum = 0;
    for(let key in a){
        sum += a[key];
    }
}

// a doua solutie: 
function myFunction(a) {
    return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

// Object.values(a) - este o metoda nativa JS care returneaza un array format din valorile tuturor proprietatilor proprii ale obj
// Metoda .reduce() este folosită pentru a reduce un array la o singură valoare, prin aplicarea unei funcții asupra fiecărui element al array-ului.

myFunction({a:1,b:2,c:3}) // expected 6

//--------------------------------------------------------------------------------------------

// - 12 - Remove a property from an object
// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

function myFunction12(obj){
    const {b, ...result} = obj;
    return result;
}

myFunction12({ a: 1, b: 7, c: 3 }) // expected { a: 1, c: 3 }

/* destructurarea: const {b, ...result} = obj; - este o functionalitate care permite extragerea anumitor proprietati 
dintr-un obj si atribuirea lor unor variabile. 
{ b, ...rest } înseamnă:
Extrage proprietatea b din obiectul obj și o atribuie variabilei b.
Operatorul ...rest (rest operator) ia toate celelalte proprietăți care nu au fost extrase explicit (în acest caz, toate proprietățile exceptând b) 
și le pune într-un nou obiect numit rest.*/

//--------------------------------------------------------------------------------------------

// - 13 - Merge two objects with matching keys
// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. 
// It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. 
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function myFunction13(x, y) {
    const { b, ...rest } = y; // extrage valoarea prop b din obiectul y si o stocheaza in variabila b
    return { ...x, ...rest, d: b };
}

myFunction13({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }); // expected { a: 1, b: 2, c: 3, e: 5, d: 4}

//------------------------------------------------------------------------------------------------

// - 14 - Multiply all object values by x: 
// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.


function myFunction14(a, b){
    const result = {};
    for(let key in a){
        result[key] = a[key] * b;
    }
    return result;
}

// solutia autorului

function myFunction(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
}

myFunction({a:1,b:2,c:3},3) // expected {a:3,b:6,c:9}

// - 15 - Swap obj keys and values
// Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. 
// Swap the Javascript object's key with its values and return the resulting object

function myFunction15(obj){
    const swapped = {};
    for(let key in obj){
        swapped[obj[key]] = key;
    }
    return swapped;
}

// solutia autorului:
function myFunction(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
       return { ...acc, [val]: key };
    }, {});
}

myFunction15({z:'a',y:'b',x:'c',w:'d'}) // expected {a:'z',b:'y',c:'x',d:'w'}

// ----------------------------------------------------------------------------------------------

// - 16 - 
// Replace empty strings in object with null values
// Write a function that takes an object as argument. Some of the property values contain empty strings. 
// Replace empty strings and strings that contain only whitespace with null values.

function replaceSpace(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string' && obj[key].trim() === ''){
            obj[key] = null;
        }
    }
    return obj;
}

// typeof obj[key] === 'string' pentru a ne asigura că valoarea este un șir de caractere.
/*obj[key].trim() === '' verifică dacă valoarea este un șir gol sau conține doar spații 
(metoda .trim() elimină spațiile de la începutul și sfârșitul șirului).*/

myFunction({ a: 'a', b: 'b', c: '' }) // expected { a: 'a', b: 'b', c: null }

// solutia autorului: 
function myFunction(obj) {
    const newObj = { ...obj };
    for (key in newObj) {
      if (newObj[key].trim() === '') newObj[key] = null;
    }
    return newObj;
}

// -----------------------------------------------------------------------------------------------------------

// - 17 - Extracting information from objects

function getInformation(obj){
    const result = {};

    //extragem fn si ln: 
    if(obj.fn) result.fn = obj.fn; 
    if(obj.ln) result.ln = obj.ln;

    // daca size este definit in transformam in sir cu unit cm
    if (obj.size) result.size = `${obj.size} cm`;

    // Dacă weight este definit, îl transformăm în șir cu unitatea "kg"
    if (obj.weight) result.weight = `${obj.weight} kg`;

    return result;
}

getInformation({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67});
// Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}


// Solutia autorului

function myFunction(obj) {
    return {
      fn: obj.fn,
      ln: obj.ln,
      ...(obj.size && { size: `${obj.size}cm` }),
      ...(obj.weight && { weight: `${obj.weight}kg` }),
    };
  }

// ----------------------------------------------------------------------------------------------

// - 18 - 
// Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. 
// Return the new array of objects. Hint: try not to mutate the original array

function newArray(arr, str){
    // folosim map pentru a crea un nou array fara a modifica cel original:
    return arr.map(obj => {
        return {
            ...obj, // copiem propr obiectului original
            continent: continentName // adaugam noua proprietate
        };
    });
}

// Exemplu de utilizare
const countries = [
    { name: 'Romania', capital: 'Bucharest' },
    { name: 'France', capital: 'Paris' }
];

const updatedCountries = addContinentProperty(countries, 'Europe');
console.log(updatedCountries);


// solutia autorului: 

function myFunction(arr, str) {
    return arr.map((obj) => ({ ...obj, continent: str }));
}

// map - metoda care parcurge fiecare array si returneaza un nou array in care fiecare element este transformat conform functieide callback
// { ...obj, continent: str } creează un nou obiect. Pe lângă proprietățile copiate din obj, acesta adaugă o nouă proprietate continent cu valoarea dată de str.


//------------------------------------------------------------------------------------------------

// - 19 - Convert array obj with counter
/*Write a function that takes an array of numbers as argument. 
Convert the array to an object. It should have a key for each unique value of the array. 
The corresponding object value should be the number of times the key occurs within the array.*/

function myFunction19(numbersArray) {
    return numbersArray.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}
// Exemplu de utilizare
const numbers = [1, 2, 2, 3, 3, 3, 4];
const frequencyObject = myFunction19(numbers);

console.log(frequencyObject);

// solutia autorului 
myFunction19([1,2,2,3]) // xpected {1:1,2:2,3:1}
