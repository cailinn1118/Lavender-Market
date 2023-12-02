search.js

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

document.querySelector('#cart-icon').onclick = () =>{
  document.querySelector('#sabi').classList.toggle('active');
}

document.querySelector('#cart-close').onclick = () =>{
  document.querySelector('#sabi').classList.remove('active');
}