import data from './data/rickandmorty/rickandmorty.js';
import { statisticsPercentage } from './data.js';
import { statisticsValue } from './data.js';

const dataRickAndMorty = data.results;

// Display Curiosities
const displayCuriosities = () =>{
    const rickAndMortyCard = document.getElementById('rickandmorty-card-back');
    const genderCard = document.getElementById('gender-card-back');
    const randomCard = document.getElementById('random-card-back');
    const percentage = statisticsPercentage;
    const value = statisticsValue;
    rickAndMortyCard.innerHTML= 
        `<h3> Did you know...</h3>
        <p>There are <b>${value('name', 'Rick', dataRickAndMorty)} Ricks</b>, this equals <b>${percentage(dataRickAndMorty, 'name', 'Rick')}% </b> of all characters.</p></br>
        <p>There are <b>${value('name', 'Morty', dataRickAndMorty)} Mortys</b>, this equals <b>${percentage(dataRickAndMorty, 'name', 'Morty')}% </b> of all characters.</p>
        <img src="images/rickandmortyicon.png" class="main-icon">
        `;
    genderCard.innerHTML= 
    `<h3> Did you know...</h3>
    <p> There are <b>${value('gender', 'Female', dataRickAndMorty)} women</b>, this equals <b>${percentage(dataRickAndMorty, 'gender', 'Female')}% </b> of all characters.</p></br>
    <p> There are <b>${value('gender', 'Male', dataRickAndMorty)} men</b>, this equals <b>${percentage(dataRickAndMorty, 'gender', 'Male')}% </b> of all characters.</p>
    <img src="images/rickandmortyicon.png" class="main-icon">
    `;
    randomCard.innerHTML= 
    `<h3> Did you know...</h3>
    <p> There are <b>${value('species', 'Human', dataRickAndMorty)} humans </b> this equals <b>${percentage(dataRickAndMorty, 'species', 'Human')}% </b> of all the characters.</p></br>
    <p> There are <b>${value('status', 'Dead', dataRickAndMorty)} dead </b> this equals <b>${percentage(dataRickAndMorty, 'status', 'Dead')}% </b> of all the characters.</p>
    <img src="images/rickandmortyicon.png" class="main-icon">
    `;
} 

displayCuriosities();

const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

    // Hamburguer Menu

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        })

    // Display footer
    const displayFooter = () =>{
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <div class="social">
                <a href="https://www.facebook.com/RickandMorty/" target="_blank"><img src="images/facebook.png"></a>
                <a href="https://www.instagram.com/rickandmorty/" target="_blank"><img src="images/instagram.png"></a>
                <a href="https://twitter.com/rickandmorty" target="_blank"><img src="images/twitter.png"></a>
                <a href="https://www.adultswim.com/misc/rick-and-morty-products/" target="_blank"><img src="images/shop.png" target="_blank"></a>
                <a href="https://ko-fi.com/" target="_blank"><img src="images/coffee.png"></a>
            </div>
            <div class="authors">
                <p>BY MARYCIELO & SHEILLY - LIM013 LABORATORIA 2020</p>
            </div>
            `
    } 
    
    displayFooter();