console.group('Cuadrado')
const ladoCua = 5;
const perimetroCua = ladoCua*4;
const areaCua = ladoCua^2;

function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado ^2,
    }
}

console.log({
    ladoCua,
    perimetroCua,
    areaCua,
});
console.groupEnd('Cuadrado')


console.group('Triangulo')
const LTrian1 = 6;
const LTrian2 = 6;
const LTrian3 = 4;
const altura = 5.5;

const perimetroTrian = LTrian1 + LTrian2 + LTrian3;
const areaTrian = (LTrian3 * altura) /2

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAltTrian(lado1, base){
    if(base == lado1){
        console.warn('No es un triángulo isosceles');
    } else {
        return Math.sqrt((lado1**2)-((base/2)**2))
    }
}

function altTrianEscaleno(lado1, lado2, lado3){
    
    const sempe = (lado1 + lado2 + lado3)/2
    console.log(lado1, lado2, lado3)
    const raiz_mul_semi = Math.sqrt(sempe*(sempe-lado1)*(sempe-lado2)*(sempe-lado3))
    const alt_lado1 = (2*raiz_mul_semi)/lado1
    const alt_lado2 = (2*raiz_mul_semi)/lado2
    const alt_lado3 = (2*raiz_mul_semi)/lado3
    console.log(alt_lado1, alt_lado2, alt_lado3)
    var lista_lados = [alt_lado1, alt_lado2, alt_lado3]
    var respuesta_string
    var lados
    if(alt_lado1 != 0 || alt_lado2 != 0 || alt_lado3 != 0){
        respuesta_string = `Las alturas aproximadas son:`
        for (lados = 0; lados <= 2; lados += 1){
            var lado_act = lados + 1
            var text_to_add = `\n- Para el lado ${lado_act} es ${lista_lados[lados].toFixed(4)} unidades.`
            var respuesta_string = respuesta_string + text_to_add
        }
    } else {
        respuesta_string = `No es posible obtener las alturas.`;
        console.warn('No es posible formar un triángulo');
    };
    
    
    return respuesta_string

}

console.log({
    LTrian1,
    LTrian2,
    LTrian3,
    altura,
    perimetroTrian,
    areaTrian,
});
console.groupEnd('Triangulo')

console.group('Circle')
const radioCirc = 3;
const diametroCirc = radioCirc * 2;
const PI = 3.1416

const circunferencia = diametroCirc * PI;
const areaCirc = (radioCirc ** 2) * PI;

function calcularCirculo(radio){
    const pi = 3.14159265358979323846;
    return{
        circunferencia: (radio * 2) * pi,
        area: (radio**2) * Math.PI,
    }
}

console.log({
    radioCirc,
    diametroCirc,
    PI,
    circunferencia,
    areaCirc,
})


console.groupEnd('Circle')


console.group()

console.groupEnd()
