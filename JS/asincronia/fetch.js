/** @format */

function getCharacters(){
    const URL = "https://dragonball-api.com/api/characters?limit=10";

    return fetch(URL)
      .then((response) => {
        //console.log(response);
        if (response.ok) {
          return response.json();
        } else {
            throw new Error(`${response.status}- ${response.statusText} `);
        }
      })
      .then((data) => {console.log(data.items)});
}

const characters = getCharacters()


//fetch(URL, header{AÑADIR CABECERAS DE METADATO})
//Es asíncrono ya que el console log va mas rápido que la petición, por eso el then o wait
//se llama response porque la respuesta es response
//los datos vienen en el body como binario es codificado
//el response.json para descodificar el binario para poder recuperarlo
//then siempre devuelve uan promesa void 
//async/await es mas sencillo pero es lo mismo que then
