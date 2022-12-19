//Variables
//Globales
var saludo = "Bienvenidos";
console.log (saludo);

//Limitadas
//let nombre = "Ricardo";
//console.log (nombre);

//Inmutables
const apellido = "Perez";
console.log (apellido);





//TIpos de variables
//String (texto)
let nombre = "Ricardo";

//Number
//let edad = 35;
let decimal = 21.45;

//Boolean
let verdadero = true;
let falso = false;

//Undefined
let indefinido = undefined;

//Null
let nulo = "null";



//Concatenar (sumar valores):
console.log ('Hola mundo, mi nombre es ' + nombre + 'y tengo ' + edad + 'años de edad');

//Interpolación de texto (simplifica la concatenación);
console.log (`Hola mundo, mi nombre es ${nombre} y tengo ${edad} años de edad`); 








//Operadores

let x = 1
let y = 2
let z = 3
let a = 4 
let b = 4

//Aritmeticos
console.log (x-z);
console.log (x-z);
a++;
console.log(a);

//Asignación
console.log(x = z);// x igual a z
console.log(x += z);//x igual a x + z
console.log(x *= y);//x igual a x * y
//los valores son secuenciales, es decir, el valor resultante del primer enunciado modifica al siguiente y el este a su vez al siguiente.


//Comparadores
console.log(x == z);//true si ambos son iguales, y false si son diferentes
console.log(x != z);// ' ' ' ' ' ' '  ' ' ' '' ' ' ' ' ' '' ' ' ' '  ' ''
console.log(x >= y);//true si eso se cumple, false si no es así
console.log(a === b);//true si los operadores son iguales y del mismo tipo

//Lógicos
    //&& (and) -  || (or) -   !(not)
let enviar = true;
let cancelar = false;
//console.log(enviar && cancelar);
//console.log(enviar || cancelar);
console.log(!cancelar);


//Condicional ternario
    //condición ? true : false
let edad = 25;
let permiso = edad >= 18 ? "Bienvenido" : "No puede pasar";
console.log(permiso);

