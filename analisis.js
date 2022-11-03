console.log(salarios)


// salarios.find((persona)=>{
//     return persona.name == personaEnBusqueda
// })

function encontrar_persona(persona_busqueda){
    return salarios.find(persona => persona.name == persona_busqueda)
}

function mediana_por_persona(nombre_persona){
    const trabajos = encontrar_persona(nombre_persona).trabajos;

    const salarios = trabajos.map(function (elemento){
        return elemento.salario
    })

    const mediana_salarios = PlatziMath.calcular_mediana(salarios)
    // console.log(salarios);
    // console.log(mediana_salarios);
    return mediana_salarios
}

function proyeccion_por_persona (nombre_persona){
    const trabajos = encontrar_persona(nombre_persona).trabajos;

    let incremento_salarial = [];

    for (let trabajo = 1; trabajo<trabajos.length; trabajo+=1){
        const salario_1 = trabajos[trabajo].salario;
        const salario_2 = trabajos[trabajo-1].salario;
        const crecimiento = salario_1 - salario_2;
        const crecimiento_porcentual = crecimiento/salario_2
        incremento_salarial.push(crecimiento_porcentual)
    }

    const mediana_crecimiento_porcentual = PlatziMath.calcular_mediana(incremento_salarial)


    const ultimo_salario = trabajos[trabajos.length-1].salario;
    const proyeccion_aumento = Number(ultimo_salario) * Number(mediana_crecimiento_porcentual);
    const proyeccion_nuevo_salario = Number(ultimo_salario) + proyeccion_aumento


    return proyeccion_nuevo_salario
}

// Análisis empresarial

const empresas = {};
for (persona of salarios){
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa]={};
        }

        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

console.log({empresas})

function mediana_empresa_año (nombre, year){
    if (!empresas[nombre]){
        console.warn('La empresa no existe');
        return;
    } else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios este año');
        return;
    } else{
        const mediana_empresa = PlatziMath.calcular_mediana(empresas[nombre][year])
        // console.log('mediana empresa año');
        // console.log(mediana_empresa);
        return mediana_empresa;
    }
}

function proyeccion_por_empresa (nombre_empresa){

    if (!empresas[nombre_empresa]){
        console.warn('La empresa no existe');
        return;
    } else {
        const empresa_año = Object.keys(empresas[nombre_empresa]);
        // console.log({empresa_año})
        const lista_mediana_año = empresa_año.map((year) => {
            return mediana_empresa_año(nombre_empresa, year)
        });
        console.log({lista_mediana_año})

        let incremento_salarial = [];

        for (let valore = 1; valore<lista_mediana_año.length; valore+=1){
            const salario_1 = lista_mediana_año[valore];
            const salario_2 = lista_mediana_año[valore-1];
            const crecimiento = salario_1 - salario_2;
            const crecimiento_porcentual = crecimiento/salario_2
            incremento_salarial.push(crecimiento_porcentual)
        }

        const mediana_crecimiento_porcentual = PlatziMath.calcular_mediana(incremento_salarial)
        
        const ultimo_mediana = lista_mediana_año[lista_mediana_año.length-1];
        const proyeccion_aumento = ultimo_mediana * mediana_crecimiento_porcentual;
        const nueva_mediana = ultimo_mediana + proyeccion_aumento


        return nueva_mediana
    };
}

// Análisis general
function mediana_general(){
    const lista_medianas = salarios.map(
        persona => mediana_por_persona(persona.name)
    );

    const mediana_total = PlatziMath.calcular_mediana(lista_medianas)
    return mediana_total;
}

function mediana_10_percent (){
    const lista_medianas = salarios.map(
        persona => mediana_por_persona(persona.name)
    );

    const medianas_ordenadas = PlatziMath.ordenar_lista(lista_medianas);

    const cantidad_total = lista_medianas.length*(10/100);
    const limite = lista_medianas.length - cantidad_total;

    const top10 = medianas_ordenadas.slice(limite, medianas_ordenadas.length);
    // slice, el slice copia sin más
    // splice, este modifica la lista, reduciendo los elementos repetidos

    const mediana_top10 = PlatziMath.calcular_mediana(top10)
    return mediana_top10
    
}