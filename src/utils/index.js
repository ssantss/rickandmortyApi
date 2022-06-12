const cardsContent = document.getElementById('cards-content'); // Se crea una constante que accede al id card-content 
let API = 'https://rickandmortyapi.com/api/character/'; // Se asigna url de la api a un valor let
let APINEXT = 'https://rickandmortyapi.com/api/character/'; // Se asigna url de la api a un valor let

const anotherFuncion = async (url_api) => {   
    try{
        const data = await fetchData(url_api)  // se  le envia a fech data la url de la api y esta devuelve todo el json que solicitamos, se le asigna a una variable DATA
        let results = data.results; // a el arreglo data, le sacamos todo el objeto data.results para tener los personajes mejor organziados y se lo asignamosa  una variable
        let nextpage = data.info.next; // le asignamos el vlaor de next page a una variable next page, que hace el llamado a la siguiente pagina de la API
        APINEXT = nextpage; // se remplaza el valor de APINEXT por el la url de la siguiente pagina, para poder traer los siguientes 20 datos

        results.map(character => { // Se recorre el objeto results, 
            const card = cardGenerator(character); // se le envia cada iteracion del objeto al cardgenerator, opara que nos genere el html que necesitamos pintar en el dom, se le asigna a una const card para despues enviarlo al dom
            cardsContent.appendChild(card); // se envia la card al dom para que se pinte y se visualice de la manera correcta
        })
        

    } catch (error){
        console.error(error) // se captura el error si la api falla
    }
}


anotherFuncion(API) // Se pintan los primeros 20 personajes de la api

function play () {  //  Esta funcion esta enlazada al button que creamos, cada que se le de click o tap va hacer una serie de comparaciones para ir y pintar los sisguientes 20 llamados, que devuelve la api

    if (API === APINEXT){ // Si api es igual  a APINEXT  pinta los priemros 20 elementos 
        anotherFuncion(API)
    
    } else if (APINEXT != null){  // Si es difernete de null cada que se le da click al boton pinta y pinta los sigueintes 20 hasta que la api llegue a nul y no se pueda hacer nada mas! 
        anotherFuncion(APINEXT)
        
    }else{

    }
   
}

