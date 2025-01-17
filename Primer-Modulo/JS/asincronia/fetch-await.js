/** @format */

async function getCharacters1() {
  const URL = "https://dragonball-api.com/api/characters?limit=10";
  const response = await fetch(URL);
  let data = "";

  if (response.ok) {
    data = await response.json();
  } else {
    console.log(response.status, response.statusText);
  }
  return data.items;
}


try {

}
catch{
    
}

const characters1 = await getCharacters1();
console.log(characters1);
