import { filterDataBySpecies } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

// console.log(data);

const charactersCards = (characters) => {
    return `
    <div class = 'cards'>
        <img class = 'photos' src = "${characters.image}">
        <h2 class = 'names'>${characters.name}</h2>
        <p><strong>Specie:</strong> ${characters.species}</p>
    </div>
    `
}
const container = document.getElementById('container');
const containerCards = document.createElement('section');
container.appendChild(containerCards);

containerCards.innerHTML = `
${data.results.map(charactersCards).join('')}
`


const selectFilterBy = document.querySelector('.filter-by-species');
selectFilterBy.addEventListener('change', (event) => {
    console.log (event.target.value);
    const speciesType = event.target.value;
    const filter = filterDataBySpecies(data.results,speciesType,'species');
    container.innerHTML = `
    ${filter.map(charactersCards).join('')}
    `
})

