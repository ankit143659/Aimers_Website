const toggle=document.querySelector('.toogle-btn');
const toggleIcon=document.querySelector('.toogle-btn i');
const dropdown=document.querySelector('.dropdown');
const a= document.querySelectorAll('a');

toggle.addEventListener('click', ()=>{

    dropdown.classList.toggle('open');
    const isopen=dropdown.classList.contains('open');
    toggleIcon.classList= isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})