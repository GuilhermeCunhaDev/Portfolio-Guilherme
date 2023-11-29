//----------------  Side Menu small screen----------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right =  "0";
}


function closemenu(){
    sidemenu.style.right =  "-200px";
}
// -----------------About me function--------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}







// ----------------------------Send Email------------------

function sendMail(){
let parms = {
name : document.getElementById("name").value,
email : document.getElementById("email").value,
message: document.getElementById("message").value,
}
emailjs.send("service_n630wwp","template_tf1jbpm",parms).then(alert("Email enviado com sucesso."))


}


// --------------Btn Top Scroll-----------

const btn = document.getElementById("btnTop")
btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll', hide)

function hide(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

hide()

// ------------------Btn See More------------


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.work')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

