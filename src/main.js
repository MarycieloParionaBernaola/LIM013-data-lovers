import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const charactersCards = (characters) => {
    return `
    <div class = 'cards'>
        <img class = 'photos' src = "${characters.image}">
        <h2 class = 'names'>${characters.name}</h2>
        <p><strong>Specie:</strong> ${characters.species}</p>
    </div>
    `
}

document.getElementById('container').innerHTML = `
${data.results.map(charactersCards).join('')}
`