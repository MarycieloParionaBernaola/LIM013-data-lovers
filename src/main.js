import { sortDataByName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//console.log(sortDataByName, data);
console.log(data.results[1].name);
const charactersCards = (characters) => {
    return `
    <div class = 'cards'>
        <img class = 'photos' src = "${characters.image}">
        <h2 class = 'names'>${characters.name}</h2>
        <p><strong>Specie:</strong> ${characters.species}</p>
    </div>
    `
}

document.getElementById('all-cards-container').innerHTML = `
${data.results.map(charactersCards).join('')}
`


const sortBy = document.querySelector('.sort-by');
sortBy.addEventListener("change", () => {
    const organizedCards = document.getElementById('all-cards-container'); 
    organizedCards.innerHTML= ""
    if (sortBy.value === "A-Z" || sortBy.value === "Z-A") {
        
    const select =sortDataByName.sortData(data.results,'name', sortBy.value);
    // Change 100 to data.results.length
    for (let i = 0; i < 100 ;i++) {
            organizedCards.innerHTML += charactersCards (data.results[i]) 
    }}});


