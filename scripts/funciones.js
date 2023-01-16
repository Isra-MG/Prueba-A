const calculo1 = function (x, y, z){
    return x + y + z;
}
let a = 5;
let b = 6;
let d = 2.2;
console.log(calculo1(a, b, d))

const calculo2 = function (x, y){
    return x>=y;
}
console.log(calculo2(a, d))

const calculo1a = (x , y, z) => x + y + z;
console.log(calculo1a(a, b, d))

const calculo2a = (x , y) => x >= y;
console.log(calculo2a(a, d))


const InfPersonal = {
    nombre: 'Israel',
    lugar: 'Puebla',
    ocupación: 'Estudiante',
    calculas: (e, f, g, h)=> e + f / g * h,
    salud:{
        edad:25,
        sexo:'masculina'
    }
}
const {nombre, ocupación, lugar} = InfPersonal;
console.log(nombre, ocupación, lugar);


let l=5;
let m=8;
const ecuación = (j,k) => j<=k;
const Arreglo = ["Bienvenido", 2022, ecuación(l,m), saludos = ['Programación web', "Enero"]];
console.log(Arreglo[1],Arreglo[2],Arreglo[3][0]);
