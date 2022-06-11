const cardsContent = document.getElementById('cards-content');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFuncion = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        let results = data.results;
        let nextpage = data.info.next;
        console.log(results)
        results.map(character => {
            console.log(character)
            const card = cardGenerator(character);
            cardsContent.appendChild(card);
        })
        

    } catch (error){
        console.error(error)
    }
}
console.log('before');
anotherFuncion(API);
console.log('AFTER');
