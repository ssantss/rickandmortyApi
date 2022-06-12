const cardsContent = document.getElementById('cards-content');
const API = 'https://rickandmortyapi.com/api/character/';
let APINEXT = ''; 

const anotherFuncion = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        let results = data.results;
        var nextpage = data.info.next;
        
        for (let index = 2; index <= /* data.info.pages */ 2 ; index++) { // LE COMENTE EN data.info.pages para no hacer tantos llamados
            console.log(nextpage)
            const data2 = await fetchData(nextpage)
            results = [...results,...data2.results ]
            nextpage = data2.info.next;
            
        } 

        results.map(character => {
            console.log(character)
            const card = cardGenerator(character);
            cardsContent.appendChild(card);
        })
        

    } catch (error){
        console.error(error)
    }
}
/* console.log(data2.info.next) */
/* anotherFuncion(API); */

function play () {
    anotherFuncion(API);
    APINEXT = nextpage
    console.log(APINEXT)
}

