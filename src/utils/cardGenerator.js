const cardGenerator = (object) => {
  // card recibe un objeto (results) con todos los valores que debemos construir
  const card = document.createElement("article"); // se crea un elemento en el dom tipo article y se le pone como class tarjet
  card.classList.add("tarjet");
  // SE construye todo el html hacinedo los llamadaso a los objetos y se retorna la card para el envio al DOM
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
};
