const data = ["hola",2,5,"adios"];
for( let i =0; i<3; i++){
    const logico= data[i]<data[i+1];
    if (logico == true) {
        console.log(data[1] +' es menor que '+ data[2]);
        const suma = data[1]+data[2];
        const resta = data[1]-data[2];
        const division = data[1]/data[2];
        const multiplicacion = data[1]*data[2];
        const modulo = data[1]%data[2];
        console.log('suma: '+ suma);
        console.log('resta: '+ resta);
        console.log('multiplicacion: '+ multiplicacion);
        console.log('division: '+ division);
        console.log('moldulo: '+ modulo);   
    } else{
        console.log('No es menor, prueba otro numero');
    }
}

