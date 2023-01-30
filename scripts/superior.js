

let zapatos = [
    {marca: 'NIKE', stock: 8, precios: 150.30},
    {marca: 'PUMA', stock: 7, precios: 80.5},
    {marca: 'ADIDAS', stock: 6, precios: 70.41},
    {marca: 'CONVERSE', stock: 8, precios: 120.8},
]


//1
zapatos.forEach(item => {
    console.log(item.marca, 'Stock:' + item.stock);
});


//2
let caro = zapatos.filter(item => item.precios > 200)
console.log(caro);


//3
const orden1 = zapatos.map(item => item.precios);
let promedio =orden1.reduce((anterior, actual) => anterior + actual, 0);
console.log(promedio/4);


//4
zapatos.sort((a, b) => {
    if(a.marca == b.marca){
        return 0;
    }
    if(a.marca < b.marca){
        return -1;
    }
    return 1;
})
console.log(zapatos);


//5
let precioMax = 0;

zapatos.forEach(item => {
    precioMax = Math.max(item.precios, precioMax);

})
console.log(Math.round(precioMax));