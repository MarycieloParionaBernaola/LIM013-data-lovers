import { sortDataByName } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//console.log(sortDataByName, data);

const charactersCards = (characters) => {
    return `
    <div class = 'cards'>
        <img class = 'photos' src = "${characters.image}">
        <h2 class = 'names'>${characters.name}</h2>
        <p><strong>Specie:</strong> ${characters.species}</p>
    </div>
    `
}

/*document.getElementById('all-cards-container').innerHTML = `
${data.results.map(charactersCards).join('')}
`*/


/*const sortBy = document.getElementById('sort-by');
sortBy.addEventListener("change", () => {
    const organizedCards = document.getElementById('all-cards-container'); 
    organizedCards.innerHTML= ""
    if (sortBy.value === "A-Z" || sortBy.value === "Z-A") {
        for (let i = 0; i < data.results.length ;i++) {
            organizedCards.innerHTML +=` 
            <h5> ${_.sortData(data.results, "name", sortBy.value)[i].name}</h5>
            `    
     }}});
     */

const selectSortBy = document.querySelector('.sort-by');
selectSortBy.addEventListener('change', (event) => {
console.log (event.target.value);
const name = event.target.value;
const sort = sortDataByName(data.results,name,selectSortBy);
document.getElementById('organized-container').innerHTML = `
${sort.map(charactersCards).join('')}
        `
})
    