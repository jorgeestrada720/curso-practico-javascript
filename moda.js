

function moda (lista){

    const listaCount = {};

    lista.map(
        function(elemento){

            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }

        }
    );

    const listArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1]; 
        }
    );

    const moda = listArray[listArray.length -1];

}






