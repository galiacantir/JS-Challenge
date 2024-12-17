// - Ciclo for + array 

const arr = [1, 2, 3];
for(i = 0; i< arr.length; arr[i++] = 0);
console.log(arr);
/* 
arr[0] = 0
arr[1] = 0
arr[2] = 0
i = 3
Deci, rezultatul este 
[0, 0, 0]
*/


// - Exercitiu de la interviu de angajare: 

// - Solutia 1 - 
const array = [
    {color: "white", id: 2}, 
    {color: "black", id: 3},
]; 

function colorFromArray(arr){
    let output = {};
    arr.forEach(item => {
        let color = item.color;
        let id = item.id;
    })

}

let output = colorFromArray(array);
console.log(output);

