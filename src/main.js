import data from './data/rickandmorty/rickandmorty.js';
import { filterDataByProperty } from './data.js';
import { sortDataByName } from './data.js';


const mainContainer = document.getElementById('main-container');
const cardsContainer = document.createElement('ul');
mainContainer.appendChild(cardsContainer);
const dataRickAndMorty = data.results;

    // Display Characters 
    const displayCharacters = (characters, container) => {

        const htmlString = characters.map((character) => {
            return `
            <li class = 'card'>
            <div = 'photo-column'>
                <img class = 'photo' src = "${character.image}">
            </div>
            <div = 'information-column'>
                <h2 class = 'name'>${character.name}</h2>
                <p><b>Specie:</b> ${character.species}</p>
            </div>
            </li>
            `;
        })
        .join('');
        container.innerHTML = htmlString;
    }
    displayCharacters(dataRickAndMorty, cardsContainer);

    // Search Bar
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', (event) => {
        const inputName = event.target.value; 
        //console.log(inputName);
        const searchByName = filterDataByProperty(dataRickAndMorty, 'name', inputName);
        displayCharacters(searchByName, mainContainer);
    })
    


    // Filter by species
    const filterBySpecies = document.querySelector('.filter-by-species');
    filterBySpecies.addEventListener('change', (event) => {
        const specieSelected = event.target.value;
        const filter = filterDataByProperty(dataRickAndMorty, 'species', specieSelected);
        displayCharacters(filter, mainContainer);
    })


    // Sort by "A-Z" or "Z-A"
    const sortBy = document.querySelector('.sort-by');
    sortBy.addEventListener('change', (event) => {
        const sortSelected = event.target.value;
        const sort = sortDataByName.sortData(dataRickAndMorty,'name', sortSelected);
        displayCharacters(sort, mainContainer);
    });
    
        
    // Display footer
    const displayFooter = () =>{
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <div class="social">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Store</a>
                <a href="#">Coffee</a>
            </div>
            <div class="authors">
                <p>By Marycielo & Sheilly - LIM013 Laboratoria 2020</p>
            </div>
            `
    } 
    displayFooter();