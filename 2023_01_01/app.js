const vegburger = document.getElementById('vegburger');
const nav = document.getElementById('nav');

vegburger.addEventListener('click',(event)=>{
    nav.classList.toggle('menu-active');
    vegburger.classList.toggle('fi-align-justify');
    vegburger.classList.toggle('fi-arrow-left');
})

vegburger.addEventListener('mouseleave',(event)=>{
    nav.classList.remove('menu-active');
    vegburger.classList.remove('fi-arrow-left');
    vegburger.classList.add('fi-align-justify');
   
})