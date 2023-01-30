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
//let nombre = "Ricardo";

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
//let edad = 25;
//let permiso = edad >= 18 ? "Bienvenido" : "No puede pasar";
//console.log(permiso);










//Funciones
function cargarAgua (){
    console.log('Abrir el refrigerador');
    console.log('Sacar el agua del refrigerador')
    console.log('Llenar el vaso de agua');
}
//cargarAgua()

//Calculos
function calculo1 () {
    let resultado = a + b;
    console.log(resultado);
}
calculo1(2, 5)

const calculo2 = function (x, y){
    return x + y;
}
let c = 5;
let d = 6;

console.log(calculo2(c, d))




//Funcionesflecha
let password = true;

//funcion normal
const login = function (x){
    return x;
}
login(password) == true ? console.log('Bienvenido') : console.log('Denegado');

//funciones flecha - arrow function:
const login2 = x => x;
login2(password) == true ? console.log('Bienvenido') : console.log('Denegado');

//funciones flecha sin parámetro, retornando un valor:
const login3 = () => true;
login3(password) == true ? console.log('Bienvenido') : console.log('Denegado');

//función felcha con más de un parámetro:
const login4 = (clave, usuario) => console.log(`Usuario ${usuario} su acceso es ${clave}`);
login4(password, "Ricardo");

//función flecha con más de una linea de codigo a ejecutar:
let login5 = (password) => {
    console.log ('Hola mundo');
    return password;
}
login5(password) == true ? console.log('Bienvenido') : console.log('Denegado');



//OBJETOS Y DESESTRUCTURACIÓN

//Objetos

const Usuario1 = {
    //clave: valor
    nombre: 'Ricardo',
//    email: 'ricardo@mail.com',
//    pais: 'mexico',
    //acceso: true,
    unaFuncion: (a, b)=> a + b,
//    salud:{
//        edad:35,
//        sexo:'masculina',
//        peso:80
//    },
    gustos: preferenciasUsuario
}
//console.log(Usuario1);
console.log(Usuario1.salud.edad);
//console.log(Usuario1.pais);
//console.log(Usuario1.nombre);

//Desestructuración:
const {pais, email} = Usuario1;
console.log(pais, acceso, email);

const retornarUsuario = ({email, pais}) => {
    console.log(email, pais)
}
retornarUsuario(Usuario1);




/*ARRAYS

let valor1 = 5
let valor2 = 2

let acceso = true
let unaFuncion = (a,b) => a+b

const nuestroArray = ['Ricardo',35, acceso, unaFuncion(valor1,valor2),['México', 2022]];
//posiciones: 0, 1, 2, 3, 4, ...
console.log(nuestroArray[1]);
console.log(nuestroArray[2]);


desestructuración array
const [nombre, edad] = nuestroArray;
console.log(nombre, edad);


const funionArray = () => {return nuestroArray;}
const [nombre, edad] = funionArray();
console.log(nombre, edad);

*/
//JSON






/*Condicionales

Estructura general

//if (evaluación){
//    accion_si_verdadero
//}
*/
//const clave = 123
/*
if (clave == 123){
    console.log("Aprobado");
}else {
    console.log("Denegado");
}
*/


// Operador ternario
//let acceso = (clave == 123 ? console.log('Aprobado'):console.log('Denegado'));

let clave = prompt('Ingrese clave: ');

let acceso = (clave == 123 ? true : false);

if (acceso == true){
    alert('Acceso aprobado');
}else{
    alert('Acceso denegado');
}

//Condicional elese if:
let edad = prompt('Ingrese su edad: ');

if(edad>=60){
    alert('Usted tiene un descuento');
}else if(edad >=18){
    alert('Usted no tiene descuento');
}else{
    alert('Ud. necesita un representante mayor de edad');
}

/*Bucle for

for (variable = valor_inicial; condicion_a_evaluar ; incremento){
    acción/es a realizar;
}


for(i = 1; i <= 5; i++){
    console.log('Impresion de mensaje'+ i);
}
*/

let estudiantes = [
    {nombre: 'Arturo', edad: '23', carrera: 'Ingeniería Mecánica'},
    {nombre: 'Omar', edad: '23', carrera: 'Medicina veterinaria'},
    {nombre: 'Javier', edad: '22', carrera: 'Telecomunicaciones'},
    {nombre: 'Jaime', edad: '24', carrera: 'Negocios Internacionales'},
];

for(i = 0; i < estudiantes.length; i++){
    console.log('El nombre del estudiante es: '+ estudiantes[i].nombre);
}



/*
Bucle while

while(condición){
    acción/es a realizar;
    variable++;
}

let contador = 1;

while(contador < 6){
    console.log('Esta es la iteracion número' + contador);
}
*/


/*
Do-while

do{
    instrucciones a seguir
}
while(condición)

let contador = 1;

do{
    console.log('Esta es la iteración número' + contador);
    contador++;
}
while(contador<10);

*/


/*
SWITCH

switch(variable){
    case valor:
        accion/es a realizar;

        break;
    case valor:
        acción/es a realizar;

        break;
    case valor:
        acción/es a realizar;

        break;
}


let fruta = 'Fresa';

switch(fruta){
    case 'Pera':
        console.log('Me gustan las peras')
        break;
    case 'Naranja':
        console.log('Me gustan las naranjas')
        break;
    case 'Mango':
        console.log('Me gustan los mangos')
        break;
    default:
        console.log('Esta fruta no la he probado')
        break;
} 

/// no funcionan con operadores logicos
*/



/* For each 
array_a_recorrer.forEach(Element => console.log(Element))

//Array:
let estudiantes = [
    {nombre: 'A', edad: 8, padres: ['D','J']},
    {nombre: 'B', edad: 7, padres: ['B','A']},
    {nombre: 'C', edad: 6, padres: ['M','P']},
    {nombre: 'D', edad: 8, padres: ['J','C']}
]

estudientes.forEach(nombreStud => {
    console.log(nombreStud.nombre);
})

*/


/* 
FILTER - FIND - SOME

//Array:
let estudiantes = [
    {nombre: 'A', edad: 8, padres: ['D','J']},
    {nombre: 'B', edad: 7, padres: ['B','A']},
    {nombre: 'C', edad: 6, padres: ['M','P']},
    {nombre: 'D', edad: 8, padres: ['J','C']}
]

//filter:
let edadStud = estudiantes.filter(elemento => elemento.edad > 7)
console.log(edadStud);

//filter-includes:
const padreStud = estudiantes.filter(elemento => elemento.padres.includes('P'))
console.log(padreStud);

//find:
const buscarStud = estudiantes.find(Student => Student.nombre === 'D')
console.log(buscarStud);

//some:
const nombreStud = estudiantes.some(elemento => elemento.nombre == 'D')
console.log(nombreStud);

const nombreStud2 = estudiantes.some(elemento => elemento.edad >= 5)
console.log(nombreStud2);
*/





/*
MAP - REDUCE

//Array:
let estudiantes = [
    {nombre: 'A', edad: 8, padres: 'J'},
    {nombre: 'B', edad: 7, padres: 'B'},
    {nombre: 'C', edad: 6, padres: 'P'},
    {nombre: 'D', edad: 8, padres: 'M'}
]

//map: 
const nombres = estudiantes.map(elemento => elemento.nombre)
console.log(nombres);

const edadNew = estudiantes.map(eNuevas => {
    return {
        nombre: eNuevas.nombre,
        edad: eNuevas.edad + 1,
    }
})
console.log(edadNew);


//reduce:

acumulador
actual
indice
arreglo

        estructura:

        const estructuraReduce = array.reduce(callback(acumulador, valorActual) => acumulador + valorActual.nombre, valorInicial)}


let numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acumulador, el) => acumulador + el, 6)
console.log(suma);


fruits = [
    {des: 'orange', amount: 50},
    {des: 'orange', amount: 50},
    {des: 'apple', amount: 75},
    {des: 'kiwi', amount: 30},
    {des: 'melon', amount: 24}
]

const itemNew = fruits.map(item => item.amount)
console.log(itemNew);

let suma = itemNew.reduce((anterior, actual) => anterior + actual, 0)
console.log(suma);
*/



/* 
SORT

const numeros = [10, 25, 38, 40, 56, 61]

//menor a mayor:
let ordenar1 = numeros.sort((a, b) => a-b);
console.log(ordenar1);

//mayor a menor:
let ordenar2 = numeros.sort((a, b) => b-a);
console.log(ordenar2);


//Ordenar Strings

let palabras = ["a", "b", "c", "d", "e", "f"];

palabras.sort((a, b) => {
    if(a == b){
        return 0;
    }
    if(a < b){
        return -1;
    }
    return 1;
})
console.log(palabras);

palabras.sort((a, b) => {
    if(a == b){
        return 0;
    }
    if(b < a){
        return -1;
    }
    return 1;
})
console.log(palabras);




let estudiantes = [
    {nombre: 'A', edad: 8, padres: 'J'},
    {nombre: 'B', edad: 7, padres: 'B'},
    {nombre: 'C', edad: 6, padres: 'P'},
    {nombre: 'D', edad: 8, padres: 'M'}
]

        //ordenar por edad

estudiantes.sort((a, b) => {
    if(a.edad == b.edad){
        return 0;
    }
    if(b.edad < a.edad){
        return -1;
    }
    return 1;
})
console.log(estudiantes);

estudiantes.sort((a, b) => {
    if(a.edad == b.edad){
        return 0;
    }
    if(a.edad < b.edad){
        return -1;
    }
    return 1;
})
console.log(estudiantes);

        //ordenar por nombre

estudiantes.sort((a, b) => {
    if(a.nombre == b.nombre){
        return 0;
    }
    if(b.nombre < a.nombre){
        return -1;
    }
    return 1;
})
console.log(estudiantes);

estudiantes.sort((a, b) => {
    if(a.nombre == b.nombre){
        return 0;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
    return 1;
})
console.log(estudiantes);

*/


/* 
Objectmatch

MATH

//Valor máximo:
console.log(Math.max(12.7, 11, 25, 67));

//Valor mínimo:
console.log(Math.min(3, 78, 90, 12.7));

//Máximo entero menor o igual a un número:
console.log(Math.floor(12.7));

//Redondear un valor:
console.log(Math.round(12.7));

//Exponencial:
console.log(Math.pow(10, 2));

//Número aleatorio entre 0 y 1:
console.log(Math.random());

//Raiz cuadrada:
console.log(Math.sqrt(12.7));

//Tangente de un numero:
console.log(Math.tan(45));


let estudiantes = [
    {nombre: 'A', edad: 8, promedio: 5},
    {nombre: 'B', edad: 7, promedio: 8},
    {nombre: 'C', edad: 6, promedio: 9},
    {nombre: 'D', edad: 8, promedio: 3}
]

let promedioMax = 0;

estudiantes.forEach(elemento => {
    console.log(elemento.promedio);
    promedioMax = Math.max(elemento.promedio, promedioMax);

})
console.log('El promedio máximo es:', promedioMax);
*/