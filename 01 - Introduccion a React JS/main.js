//Ejemplo codigo delcarativo e imperativo

//consigna Crear un array de numeros pares entre el 0 y el 10


//IMPERATIVO

let num = []

for(let i = 0; i <= 10; i ++) {
    if( i  % 2 == 0 ){
        num.push(i)
    }
}

console.log(num)


//DECLARATIVO

let numDeclarativo = [0,1,2,3,4,5,6,7,8,9,10]

let pares = numDeclarativo.filter(num => num % 2 == 0)
console.log(pares)


//-----------------------------------------------------------------------------------

