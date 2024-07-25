const toggle=document.querySelector('.toogle-btn');
const toggleIcon=document.querySelector('.toogle-btn i');
const dropdown=document.querySelector('.dropdown');
const a= document.querySelectorAll('a');
const name1=document.getElementById('name');
const email=document.getElementById('email');
const textArea=document.getElementById('area');
const submitbtn=document.getElementById('submit');

toggle.addEventListener('click', ()=>{

    dropdown.classList.toggle('open');
    const isopen=dropdown.classList.contains('open');
    toggleIcon.classList= isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})

submitbtn.addEventListener('click', (event)=>{
    if(name1.value!=="" && email.value!=="" && textArea.value!==""){
        name1.value="";
        email.value="";
        textArea.value="";
    }
    else{
        event.preventDefault();
        alert("please fill require fill")
    }

})

