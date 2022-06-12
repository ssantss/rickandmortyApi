const cardGenerator = object => {
    const card = document.createElement('article');
    card.classList.add('tarjet')
  
    card.innerHTML = `
    <img src="${object.image}" alt="imagen de ${object.name}">
    <h2 class="Title_card">${object.name}</h2>
    <div class="description-tarjet">
        <p><b>Especies: </b>${object.species}</p>
        <p><b>Gender: </b>${object.gender}</p>
        <p><b>Origin: </b>${object.origin.name}</p>
        <p><b>Location: </b>${object.location.name}</p>
        <p class="${object.status}"><b>Status: </b>${object.status}</p>
    </div>
    `;
  
    return card;
  }

 