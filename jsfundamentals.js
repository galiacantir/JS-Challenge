
// --- 1 ---
// Sum two numbers:
// Write a function that takes two numbers (a, b) as argument. Sum a anb b. Return the result.

function myFunction1(a,b){
    return a + b; 
}

myFunction1(1,2);
myFunction1(1,10);
myFunction1(99,1);

// -----------------------------------------------------------------------------------

//  ---2--- Comparison operators, strict equality:
// Write a function that takes 2 values (a, b - arg). Return true if the two values are equal and of the same type:

function myFunction2(a,b){
    return a === b; 
}
myFunction2(2,3);
myFunction2(3,3);

// -----------------------------------------------------------------------------------

// ---3--- Get type of value:
// Write a function than takes a value as argument.Return the type of the value:

function myFunction3(a){
    return typeof a;
}

myFunction3(1);
myFunction3(false);
myFunction3('ciao');


// -------------------------------------------------------------------------------------

// ---4--- Get nth character of string: 
// Write a function that takes a string(a) and a number(n) as argument.Return the nth charaster of a.

function myFunction4(a, n){
    return a[n-1];
}

// ------------------------------------------------------------------------------------------

// ---5--- Remove first n characters of string
// Write a function that takes a string(a) as argument. Remove the first 3 characters of a:

function myFunction5(a){
    return a.slice(3);
}
/* slice method - extracts a part of a string and returns it without modifying the original string.
 To define the part that you want to extract, you can call it with two parameters. 
 The first parameter defines the index of the first character in the string that you want to extract. 
 The second parameter defines the index of the first character that you do not want to extract.
*/
myFunction5('abcdefg'); // excepted: 'defg'
myFunction5('1234'); // excepted: '4'

// -----------------------------------------------------------------------------------------------

// -6- Get last n characters of string
// Write a function that takes a string as asrgument.Extract the last 3 charachters from the string.

function myFunction6(str){
    return str.slice(-3); // cu minus pentru a extrage ulrimele litere 
}

myFunction6('abcdefg'); // expected 'efg';


// -------------------------------------------------------------------------------------------------------

// -7- Get first n characters of string, get the first 3 characters of a

function myFunction7(a){
    return a.slice(0,3);
}

myFunction7('abcdefg'); // expected: 'abc'

// ---------------------------------------------------------------------------------------------------

// -8- Find the position of one string in another:

function myFunction8(a){
    return a.indexOf('is'); 
}

myFunction8("praise"); // excepted 3

//------------------------------------------------------------------------------------------------------

// -9- Extract first half of string: 

function myFunction9(a){
    return a.slice(0, a.length / 2); //
}

    // a.length /2 - calculeaza jumatatea din lungimea array-ului
    // slice(start, end): returnează un sub-array din array-ul a, care conține elementele între indexul start (inclusiv) și end (exclusiv).


// ------------------------------------------------------------------------------------------

// -10- Remove last n characters of string:

function myFunction10(a){
    return a.slice(0, - 3);
}

myFunction10('fgedcba'); // excepted 'fged'

//---------------------------------------------------------------------------------------------------

// -11- Return the percentage of a number: 

function myFunction11(a,b){
    return (a * b) / 100 // sau b / 100 *a
}

myFunction11(100,50); // expected 50

//--------------------------------------------------------------------------------------------

// -12- Basic JavaScript math operators: 
/*Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. 
Then substract by c. Then multiply by d and divide by e. 
Finally raise to the power of f and return the result. Hint: mind the order.*/

function myFunction12(a,b,c,d,e,f){
    return (((a + b - c) * d) / e) ** f;
}

myFunction12(6,5,4,3,2,1); // excepted 10.5

//----------------------------------------------------------------------------------------------

// -13- Check whether a string contains another string and concatenate: 
/*
Write a function that takes two strings (a and b) as arguments. 
If a contains b, append b to the beginning of a. 
If not, append it to the end. Return the concatenation
*/

function myFunction13(a,b){
    return a.indexOf(b) === -1 ? a + b : b + a; // DE CE? 
}

myFunction13('cheese', 'cake') // expected 'cheesecake'
myFunction13(' think, therefore I am', 'I') // expected 'I think, therefore I am'

//------------------------------------------------------------------------------------------------

// -14- Check if a number is even: 

function myFunction14(a){
    return a % 2 === 0;
}

// even/numar par = modulo (restul 0)

myFunction14(20);
myFunction14(5);

//-------------------------------------------------------------------------------------------------

// -15- How many times does a character occur? 
// Write a function that takes two strings (a and b) as arguments. 
// Return the number of times a occurs in b.


function myFunction15(a,b){
    b.split(a).length - 1;
}

myFunction15('h', 'how many times does the character occur in this sentence?') // expected 4

//----------------------------------------------------------------------------------------------

// - 16- Check if a number is a whole number: 

function myFunction16 (a){
    return a - Math.floor(a) === 0; 
    // math - returneaza partea intreaga a unui numar
}

// sau: return Number.isInteger(a);
// a - Math.floor(a) - se scade partea intreaga a lui din el insusi
// a - Math.floor(a) === 0 - se verifica daca diferenta dintre a si partea sa intreaga este egala cu 0

myFunction16(10); // true: 10 - Math.floor(10) === 0

//------------------------------------------------------------------------------------------------

// -17- Multiplication, dicision and comparison operators
// Write a function that takes two numbers (a and b) as arguments. 
// If a is smaller than b, divide a by b. Otherwise, multiply both numbers

function myFunction17(a,b){
    if (a<b){
        return a / b
    } else a * b
}

myFunction17(10,100) // expected 0.1
myFunction17(90, 45) // 4050

//--------------------------------------------------------------------------------------------------

// -18- Road a number to 2 decimal places
// Write a function that takes a number (a) as argument. 
// Round a to the 2nd digit after the decimal point.

function myFunction18(a){
    return Number(a.toFixed(2));
}

myFunction18(2.124578);

//-------------------------------------------------------------------------------------------

// -19- Split a number into its digits
// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. 
// Hint: you might want to change the type of the number for the splitting

function myFunction19(a){
    const string = a + ''; // conversteste valoarea a intr-un sir de caractere;
    const strings = string.split(''); // imparte string in caractere individuale, 
    // metoda split - imparte sirul de caractere in fiecare caracter, creind un array de stringuri
    
    return strings.map(digit => Number(digit)); // aceasca linie parcurge array si converteste fiecare element intr-un numar
}

// map - e folosita pentru a itera fiecare lement al array
// Number(digit) - converteste fiecare string intr-un numar

myFunction19(931); // expected [9,3,1]

//---------------------------------------------------------------------------------------------

// -20- Clear up the chaos behind these strings
/*
It seems like something happened to these strings. Can you figure out how to clear up the chaos? 
Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. 
You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/

function myFunction20(a,b) {
    const func = x => x.replace('%','');
    // - creeaza o functie care ia argumentul x si indeparteaza semnul % din randul x
    // - replace('%','') - inlocuieste % cu un string gol
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    // - reverse - pentru a inversa array
    // - join - pentru a reconstrui un string din array inversat
    return first.charAt(0).toUpperCase() + first.slice(1) + second; 
    // creaza un string in care primul caracter este cu majuscula, iar restul ramane neschimbat
    // charAt - pentru a obtine primul caracter din stringul first
    // toUpperCase - prima litera in mare
    //slice - extrage o subsecventa a stringului first, incepand de la al doilea caracter
}

myFunction20('java', 'tpi%rcs'); 

// alta varianta a exercitiului:

function myFunction20a(a, b){
    var return_value;

    a = a.replace('%', '');
    b = b.replace('%', '');
    b = b.split('').reverse().join('');

    return_value = a + b;
    return_value = return_value.charAt(0).toUpperCase() + return_value.slice(1);
    return return_value;
}
myFunction20a('java', 'tpi%rcs');

//--------------------------------------------------------------------------------------

// - 21- 
// Return the next prime number: - AM NEVOIE DE EXPLICATII
// Write a function that takes a number. If a is prime, return a. 
// If not, return the next higher prime number

function myFunction21(a){
    //verifica daca un numar este prim:
    function isPrime(num){
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return num > 1;
    }
    let n = a; 
    while(!isPrime(n)) n++;
    return n;
}

/*
Rolul functiei: verifica daca un numar este prim, 
itereaza prin numere de la 2 la radacina patrata a lui num(Math.sqrt(num))
*/

//----------------------------------------------------------------------------------------------------

// - 22- 
// Find next higher natural number that is divisble by y

function myFunction22(x, y){
    while (x % y !== 0){ // verificam daca restul impartirii lui x la y nu este 0
        x++; // crestem x
    }
    return x;
}

myFunction22(10,3);

//---------------------------------------------------------------------------------------------

// -23-
//Insert character after every n characters

function myFunction23(a, b){
    let result = ""; //rezultatul final
    while (a.length > 0){
        let first = a.slice(-3); // extrage ultimele 3 caractere din sirul a
        result = first + b + result; // adaugam b dupa acesre caractere
        a = a.slice(0, -3); // elimina ultimele caractere din a
    }
    return result;
}

myFunction23('1234567','.'); // expected '1.234.567'.

// sau, alta solutie, sugerata de site-ul JS Challenger

 function myFunction(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
 }

 myFunction23('1234567','.'); // expected '1.234.567'.

 //------------------------------------------------------------------------------------------

 // -24-
 // Find the correct word by incrementing letters in alphabet:

 /* Pasii: 
    - initializam un sir de caractere gol
    - incrementam fiecare litera la urmatoarea litera din alfabet
 */

function myFunction24(str){
    let result = '';
    for ( let i = 0; i < str.lenght; i++){
        let char = str[i];
        let nextChar = String.fromCharCode(char.charCodeAt(0) + 1); // incrementam litera
        result += nextChar; // adaugam litera incrementata la rezultat
    }
    return result; 
}

// char.charCodeAt(0) - transforma caracterul curent in codul sau ASCII
//  -- ASCII - fiecarui caracter i s-a atribuit cate un numar unic, ex: a - 97, A - 65
// String.fromCharCode(...) - transforma codul ASCII inapoi in caracterul sau corespunzator, ex: 98 - b

// a doua solutie: 

function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
    return correctedArray.join('');
}