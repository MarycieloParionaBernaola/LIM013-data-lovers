
// Display footer
const displayFooter = () =>{
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="social">
            <a href="https://www.facebook.com/RickandMorty/" target="_blank"><img src="images/facebook.png"></a>
            <a href="https://www.instagram.com/rickandmorty/" target="_blank"><img src="images/instagram.png"></a>
            <a href="https://twitter.com/rickandmorty" target="_blank"><img src="images/twitter.png"></a>
            <a href="#"><img src="images/shop.png" target="_blank"></a>
            <a href="https://ko-fi.com/" target="_blank"><img src="images/coffee.png"></a>
        </div>
        <div class="authors">
            <p>BY MARYCIELO & SHEILLY - LIM013 LABORATORIA 2020</p>
        </div>
        `
} 
displayFooter();