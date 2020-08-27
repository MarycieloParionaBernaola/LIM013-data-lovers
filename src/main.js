import { filterDataByProperty } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const mainContainer = document.getElementById('main-container');
const cardsContainer = document.createElement('ul');
mainContainer.appendChild(cardsContainer);
const dataRickAndMorty = data.results;

    const displayCharacters = (characters, container) => {

        const htmlString = characters.map((character) => {

            return `
            <li class = 'card'>
                <img class = 'photo' src = "${character.image}">
                <h2 class = 'name'>${character.name}</h2>
                <p><b>Specie:</b> ${character.species}</p>
            </li>
            `;
        })
        .join('');

        container.innerHTML = htmlString;
    }

    displayCharacters(dataRickAndMorty, cardsContainer);

    const filterBySpecies = document.querySelector('.filter-by-species');

    filterBySpecies.addEventListener('change', (event) => {

        const specieSelected = event.target.value;
        const filter = filterDataByProperty(dataRickAndMorty, 'species', specieSelected);
        displayCharacters(filter, mainContainer);
    })

    const displayFooter = () =>{

        const footer = document.getElementById('footer');

        footer.innerHTML = `
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Store</a>
            <a href="#">Coffee</a>
            <p>By Marycielo & Sheilly - LIM013 Laboratoria 2020</p>
            `
    } 

    displayFooter();
    