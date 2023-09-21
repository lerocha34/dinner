let menuBotao = document.querySelector('.menu-mobile-button');
let closeMenu = document.querySelector('.close-menu');



menuBotao.addEventListener("click", ()=>{
    document.querySelector(".menu-mobile").style.display = 'flex';  
    document.querySelector("body").style.overflowY = 'hidden';  
    menuBotao.style.display = 'none';
})


closeMenu.addEventListener("click",()=>{
    document.querySelector(".menu-mobile").style.display = 'none';
    document.querySelector("body").style.overflowY = 'visible';
    menuBotao.style.display = 'flex';

})