//Código del Cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd();

//Código del Triángulo

console.group("Triángulos");




function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}


 console.groupEnd();

 //Código del circulo

console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
}


const PI = Math.PI;

function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

function areaCirculo(radio){

    return PI * (radio*radio);

}

console.groupEnd();



//Aquí interactuamos con el html
function calcularPerimetroCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert("El perímetro del cuadrado es " + perimetro);
}

function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert("El area del cuadrado es " + area);
    
}


function calcularPerimetroTriangulo(){
    
    const inputTrianguloLado1 = document.getElementById("InputTrianguloLado1");
    const lado1 = parseInt(inputTrianguloLado1.value);

    const inputTrianguloLado2 = document.getElementById("InputTrianguloLado2");
    const lado2 = parseInt(inputTrianguloLado2.value);

    const inputTrianguloLado3 = document.getElementById("InputTrianguloLado3");
    const lado3 = parseInt(inputTrianguloLado3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,lado3);

    alert("El perímetro del triángulo es " + perimetro);
}

function calcularAreaTriangulo(){

    const inputBase = document.getElementById("InputTrianguloBase");
    const base = inputBase.value;

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);

    alert("El area del triángulo es " + area);
    
}

function calcularPerimetroCirculo(){

    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert("El perímetro del circulo es " + perimetro);
}

function calcularAreaCirculo(){

    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert("El area del circulo es " + area);
    
}




