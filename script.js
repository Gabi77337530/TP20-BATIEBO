
 const active = document.querySelector(".active")
 const active2 = document.querySelector(".active2");
 const active3 = document.querySelector(".active3");
 const bonde = document.querySelector(".bonde");
 const bonde2 = document.querySelector(".bonde2");
 const bonde3 = document.querySelector(".bonde3");
 const section1 = document.querySelector(".section1");
 const section2 = document.querySelector(".section2");
 const section3 = document.querySelector(".section3");
 active.addEventListener("click", () =>{
      bonde.style.display= "none";
      console.log("hgdfdsds")
      bonde2.style.display= "block";
      bonde3.style.display= "none";
 })

active2.addEventListener("click", () =>{
     bonde.style.display ="none";
     bonde2.style.display="block";
     bonde3.style.display ="none";
})

active3.addEventListener("click", () =>{
     bonde.style.display = "none";
     bonde2.style.display ="none";
     bonde3.style.display ="block";
})

const btn = document.querySelector(".Forward");
btn.addEventListener("click", () => {
     bonde.style.display="none";
     bonde2.style.display="block";
     bonde3.style.display="none";
});

const Backward=document.querySelector(".Backward");
Backward.addEventListener("click", () =>{
     bonde.style.display="block";
     bonde2.style.display="none";
     bonde3.style.display="none";
});
const Nextward=document.querySelector(".Nextward");
Nextward.addEventListener("click", () =>{
     bonde.style.display="none";
     bonde2.style.display="none";
     bonde3.style.display="block";
});
const Backward3=document.querySelector(".Backward3");
Backward3.addEventListener("click", () =>{
     bonde.style.display="none";
     bonde2.style.display="block";
     bonde3.style.display="none";
});
const Nextward3=document.querySelector(".Nextward3");
Nextward3.addEventListener("click", () =>{
     bonde.style.display="";
     bonde2.style.display="";
     bonde3.style.display="";
});


// Validation de formulaire


let myForm = document.getElementById("myForm");

myForm.addEventListener("button", function(e){
     let myInput = document.getElementById("firstname");
     let myRegex = /^[a-zA-Z-\s]+$/
     
     if(myInput.value.trim() == ""){
          let myError = document.getElementById('error');
          myError.innerHTML = "VEUILLEZ RENSEIGNER TOUS LES CHAMPS SVP.";
          myError.style.color= 'red';
          e.preventDefault();
     }else if (myRegex.test(myInput.value) == false) {
          let myError = document.getElementById('error');
          myError.innerHTML = "Le nom doit comporter des tirets uniquements.";
          myError.style.color= 'red';
          e.preventDefault();   

     }
     

});


