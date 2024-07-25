const signupbtn=document.querySelector("#signup");
const signinbtn = document.querySelector("#signin");
const container = document.querySelector("#container");
const login=document.querySelector("#login");
const regis=document.querySelector("#registration");
const genotpbtn = document.getElementById('otp');
const otpvalue=document.getElementById('otpValue');
const email=document.getElementById('email');
const password=document.getElementById('password');
const loginEmail=document.getElementById('login_email');
const loginPassword=document.getElementById('login_password');
const name1=document.querySelector("#name1");
const link= document.getElementById('loginlink');
let otpValue ="";
let emailArray=[];
let passwordArray=[];



signupbtn.addEventListener('click',()=>{
    container.classList.add('right-panel-active');
    loginEmail.value="";
    loginPassword.value="";
    otpvalue.classList.add('hide');
    genotpbtn.classList.remove('hide')
    otpvalue.value=""
});

signinbtn.addEventListener('click', ()=>{
    container.classList.remove("right-panel-active");
    name1.value="";
    email.value="";
    password.value="";
    otpvalue.classList.add('hide');
    genotpbtn.classList.remove('hide')
    otpvalue.value=""
});
regis.addEventListener('click', (event)=>{
    event.preventDefault();
    if(name1.value=="" || password.value=="" ||email.value==""){
        alert('Please Fill require details');
    }
    else{
        emailArray.push(email.value);
        passwordArray.push(password.value);
        container.classList.remove("right-panel-active");
        name1.value="";
        email.value="";
        password.value="";
    }
    otpvalue.classList.add('hide');
        genotpbtn.classList.remove('hide');
        otpvalue.value=""
});


login.addEventListener('click', (event)=>{

    if(otpValue!==""){
        if(otpvalue.value===otpValue){
            openlink();
            otpValue="";
        }
        else{
            alert("Entered incorrect otp");
            otpvalue.value="";
    }
    }
    else{
        event.preventDefault();
        alert('Please generate otp first')
    }
})


const openlink=()=>{
    loginEmail.value="";
    loginPassword.value="";
    window.open("./option.html").location(self);
    

}

genotpbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(matchDetails()===true){
    otpValue=genOtp();
    otpvalue.classList.remove('hide');
    genotpbtn.classList.add('hide')
    alert(`Your Generated Otp is ${otpValue}`);
    console.log(otpValue)
    }
    else{
        alert('Invalid username or password');
        
    }
});

const genOtp=()=>{
    let otp='';
    for(let i=1;i<=6;i++){
        otp+=Math.floor(Math.random()*10).toString();
    }
    return otp;
};
const matchDetails=()=>{
    let matcher=false;
    for(i=0;i<=emailArray.length;i++){
        if(emailArray[i]===loginEmail.value && passwordArray[i]===loginPassword.value){
            matcher=true;
        }
    }
    
    return matcher;
}
