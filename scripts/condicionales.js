
//1

let edad = prompt('Ingrese su edad: ');

if(edad>=18){
    console.log('Válido');
}else{
    console.log('No válido');
}


//2
const productos = [
    {id: 1, nombre: 'Paquete 1', precio: 200, area: 'e-commerce'},
    {id: 2, nombre: 'Paquete 2', precio: 300, area: 'blog'},
    {id: 3, nombre: 'Paquete 3', precio: 400, area: 'web'},
    {id: 4, nombre: 'Paquete 4', precio: 500, area: 'personal'},
];

for(i = 0; i < productos.length; i++){
    console.log(`El costo del ${productos[i].nombre} sería ${productos[i].precio}`);
}

//3

let edadCompra = +7;

switch(edadCompra){
    case +3:
        console.log('Entra gratis')
        break;
    case +7:
        console.log('Tiene un 2x1')
        break;
    case +20:
        console.log('Tiene un 20% de descuento')
        break;
    case +60:
        console.log('Tiene un 50% de descuento')
        break;
    default:
        console.log('No hay descuento')
        break;
} 
