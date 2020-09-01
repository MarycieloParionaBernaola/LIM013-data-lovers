import data from './data/rickandmorty/rickandmorty.js';
import { filterDataByProperty } from './data.js';
import { sortDataByName } from './data.js';


const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

    // Hamburguer Menu

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        })

const cardsContainer = document.getElementById('cards-container');
const childCardsContainer = document.createElement('ul');
cardsContainer.appendChild(childCardsContainer);
const dataRickAndMorty = data.results;

    // Display Characters 
    const displayCharacters = (characters) => {

        const htmlString = characters.map((character) => {
            return `
            <li class = 'card'>
                <div class = 'name-character'>
                <h2 class = 'name'>${character.name}</h2>
                </div>
                <div class = 'photo-character'>
                <img class = 'photo' src = "${character.image}">
                </div>
            <div = 'information-column'>
                <p><b>Specie:</b> ${character.species}</p>
                <p><b>Gender:</b> ${character.gender}</p>
                <p><b>Origin:</b> ${character.origin.name}</p>
                <p><b>Last location:</b> ${character.location.name}</p>
            </div>
            </li>
            `;
        })
        .join('');
        childCardsContainer.innerHTML = htmlString;
    }
    displayCharacters(dataRickAndMorty);

    // Search Bar
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', (event) => {
        const inputName = event.target.value; 
        //console.log(inputName);
        const searchByName = filterDataByProperty(dataRickAndMorty, 'name', inputName);
        displayCharacters(searchByName);
    })
    


    // Filter by species
    const filterBySpecies = document.querySelector('.filter-by-species');
    filterBySpecies.addEventListener('change', (event) => {
        const specieSelected = event.target.value;
        const filter = filterDataByProperty(dataRickAndMorty, 'species', specieSelected);
        displayCharacters(filter);
    })


    // Sort by "A-Z" or "Z-A"
    const sortBy = document.querySelector('.sort-by');
    sortBy.addEventListener('change', (event) => {
        const sortSelected = event.target.value;
        const sort = sortDataByName.sortData(dataRickAndMorty,'name', sortSelected);
        displayCharacters(sort);
    });
    
        
    // Display footer
    const displayFooter = () =>{
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <div class="social">
                <a href="https://www.facebook.com/RickandMorty/"><img src="images/facebook.png"></a>
                <a href="https://www.instagram.com/rickandmorty/"><img src="images/instagram.png"></a>
                <a href="https://twitter.com/rickandmorty"><img src="images/twitter.png"></a>
                <a href="#"><img src="images/shop.png"></a>
                <a href="https://ko-fi.com/"><img src="images/coffee.png"></a>
            </div>
            <div class="authors">
                <p>BY MARYCIELO & SHEILLY - LIM013 LABORATORIA 2020</p>
            </div>
            `
    } 
    displayFooter();