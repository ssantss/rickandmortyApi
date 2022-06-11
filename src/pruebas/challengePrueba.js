const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFuncion = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        let results = data.results;
        let nextpage = data.info.next;
        
/*         const character2 = data.results[0];
        const character = await fetchData (`${API}${data.results[0].id}`);
        //console.log(data.info.next)
        const data2 = await fetchData(data.info.next) // se va a la siguiente pagina */

        for (let index = 2; index <= /* data.info.pages */ 2 ; index++) { // LE COMENTE EN data.info.pages para no hacer tantos llamados
            console.log(nextpage)
            const data2 = await fetchData(nextpage)
            results = [...results,...data2.results ]
            nextpage = data2.info.next;
            
        } 
        console.log(results.length) 
        results.forEach(element => console.log(element.name));


/*         while (nextpage != null) {
            console.log(nextpage)
            const data2 = await fetchData(nextpage)
            results = [...results,...data2.results ]
            nextpage = data2.info.next;
        }
        console.log(results.length) */

       /*  console.log(data2.results[0].name) */ // ASI SE CONSULTA EL NOMBRE DE LA SIGUIENTE PAGINA 
        /* data.results.forEach(element => console.log(element.name)); */

        /* const origin = await fetchData(character.origin.url); */ // HACE LA  SIGUEINTE PETICION PARA TRAER EL NOMBRE DEL PLANETA 
        /* const origin2 = await fetchData(character2.origin.url); */
        //console.log(data.results)
         // Asi se traen todos los nombres de los personages 
/*         console.log(character2)
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
        console.log(origin2.dimension) */




    } catch (error){
        console.error(error)
    }
}

console.log('before');
anotherFuncion(API);
console.log('AFTER');