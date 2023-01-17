const vegburger = document.getElementById('vegburger');
const nav = document.getElementById('nav');

vegburger.addEventListener('click',(event)=>{
    nav.classList.toggle('menu-active');
    vegburger.classList.toggle('fi-align-justify');
    vegburger.classList.toggle('fi-arrow-left');
})

nav.addEventListener('mouseleave',(event)=>{
    nav.classList.remove('menu-active');
    vegburger.classList.remove('fi-arrow-left');
    vegburger.classList.add('fi-align-justify');
   
})

const products = [
    {id:1,name:'malna', picture:'malna.jpg',
        description:'Kézzel szedett finimság',
        price:3800,instock:true},
    {id:2,name:'Áfonya', picture:'afonya.jpg',
        description:'Kézzel szedett finimság',
        price:3250,instock:true},
    {id:3,name:'Szeder', picture:'szeder.jpg',
        description:'Kézzel szedett finimság',
        price:1700,instock:true,variations:["feher","fekete"]}
];

const productSection = document.getElementById('products');

products.forEach(product => {
    productSection.innerHTML += `<div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <image src="./img/${product.picture}">
        <h3>${product.price}</h3>
        <a id=${product.id} class="addToCart">Kosárba</a>
        </div>`;
})