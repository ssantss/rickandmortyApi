const cardsContent = document.getElementById('cards-content');
let API = 'https://rickandmortyapi.com/api/character/';
let APINEXT = 'https://rickandmortyapi.com/api/character/'; 

const anotherFuncion = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        let results = data.results;
        let nextpage = data.info.next;
        APINEXT = nextpage;

        results.map(character => {
            const card = cardGenerator(character);
            cardsContent.appendChild(card);
        })
        

    } catch (error){
        console.error(error)
    }
}


anotherFuncion(API)

function play () {

    if (API === APINEXT){
        anotherFuncion(API)
    
    } else if (APINEXT != null){
        anotherFuncion(APINEXT)
        
    }else{

    }
   
}

