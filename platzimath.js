// class PlatziMath {
//     static validar_lista_par
// }


const PlatziMath = {};



PlatziMath.validar_lista_par = function validar_lista_par(array){
    if (array.length%2){
        return false
    } else {
        return true
    }
    // return !(array.length%2);
    // en impar se quitaría la negación del return
}
PlatziMath.ordenar_lista = function ordenar_lista(array){
    function ordenar(valor1, valor2){
        if (valor1>valor2){
            return 1
        } else {
            return -1
        }
        // return valor1-valor2
        // es lo mismo, debido a que, si el valor 1 es menor que el valor 2
        // este mandará un número negativo
    }
    const lista = array.sort(ordenar)
    return lista
}

PlatziMath.ordenar_lista_2d = function ordenar_lista_2d(array){
    function ordenar(valor1, valor2){
        return valor1[1]-valor2[1]
    }
    const lista = array.sort(ordenar)
    return lista
}

PlatziMath.calcular_promedio = function calcular_promedio(array){
    // suma de los promedios dividida entre la cantidad de valores
    var TotalSum = 0
    
    for (let number_index = 0; 
        number_index < array.length; 
        number_index += 1
    ){
        TotalSum = TotalSum + array[number_index]
    }
    const prom = TotalSum / array.length
    const text1 = `Hay ${array.length} valores.`
    const text2 = `La suma total es de ${TotalSum}.`
    const text3 = `El promedio de estos es de ${prom}.`
    const textT=text1+text2+text3
    console.log(textT)
    return prom
}

PlatziMath.calcular_promedio2 = function calcular_promedio2(array){
    // suma de los promedios dividida entre la cantidad de valores
    function suma_todos_elementos(valorAcumulado, nuevoValor){
        const valorFinal = valorAcumulado + nuevoValor
        console.log(valorAcumulado)
        return valorFinal
    }

    // const suma_todos_elementos = (valorAcumulado, nuevoValor) =>{
    //     const valorFinal = valorAcumulado + nuevoValor
    //     console.log(valorAcumulado)
    //     return valorFinal
    // } misma función, otra sintaxis

    // const suma_todos_elementos = (
    //     valorAcumulado, nuevoValor
    // ) => valorAcumulado + nuevoValor;
    // misma función, otra sintaxis

    // const suma_todos_elementos = array.reduce((a,b)=>a+b);

    const TotalSum = array.reduce(suma_todos_elementos)
    
    const prom = TotalSum / array.length
    const text1 = `Hay ${array.length} valores.`
    const text2 = `La suma total es de ${TotalSum}.`
    const text3 = `El promedio de estos es de ${prom}.`
    const textT=text1+text2+text3
    console.log(textT)
    return textT
}

PlatziMath.calcular_mediana = function calcular_mediana(arrayD){
    const array = ordenar_lista(arrayD);
    const listaPar = validar_lista_par(array);
    if (listaPar){
        const indexMediana1 = (array.length)/2;
        const indexMediana2 = (array.length/2)-1;
        const medianaValue = calcular_promedio([array[indexMediana1], array[indexMediana2]])
        console.log(medianaValue);
    } else{
        // const medianaImp = Math.floor(array.length/2) + 1;
        const medianaImp = (array.length+1)/2;
        const indexMediana = medianaImp-1;
        console.log(indexMediana, array[indexMediana]);
    }
}
PlatziMath.calcular_moda = function calcular_moda(array){
    const arrCount = {};
    for (let array_ind = 0; array_ind< array.length; array_ind+=1){
        const element = array[array_ind];
        if (arrCount[element]){
            arrCount[element] += 1
        } else{
            arrCount[element] = 1
        }
    };

    const newArr = Object.entries(arrCount);
    const arrOrdenado = ordenar_lista_2d(newArr);
    const modaValue = arrOrdenado[arrOrdenado.length-1];
    console.log({arrCount, newArr, arrOrdenado, modaValue});
    return [modaValue, modaValue[0]]
}