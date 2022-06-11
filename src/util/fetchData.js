let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // ASI SE INSTANCIA LA LIBRERIA QUE TRAJIMOS 
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {
    return new Promise((resolve, reject) =>{

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() =>{
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))
    }
    })
    xhttp.send();
    });

}


module.exports = fetchData;