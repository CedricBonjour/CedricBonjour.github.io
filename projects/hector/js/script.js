window.addEventListener("load", e=>{


//================================================================UI & LAYOUT
const bg = document.getElementById("bg");
const cover_screen = document.getElementById("cover_screen");
const img_container = document.getElementById("img_container");
const wrapper = document.getElementById("wrapper");
const small_img = document.getElementById("small_img");
const header = document.getElementById("header");
const sub_header = document.getElementById("sub_header");
const txt = document.getElementById("txt");



const ratio  =  bg.width / bg.height;
//const win_count = consultants.length; 
var found_count = 0;

var size_coef = 1.001;



resize_img()
img_container.style.transition = "width 1s ease-in-out,height 1s ease-in-out"

function resize_img (coef = 1 , b="auto"){
    let screen_ratio  = window.innerWidth/ window.innerHeight
    if (screen_ratio > ratio){
        img_container.style.width = (100*coef)+"vw";
        img_container.style.height = (100*coef /ratio )+"vw";

    }else{       
        img_container.style.height = (100*coef)+"vh";
        img_container.style.width = (100*coef *ratio )+"vh";

    }
    var st =(wrapper.scrollHeight - wrapper.clientHeight) / 2;
    var sl= (wrapper.scrollWidth - wrapper.clientWidth) / 2;
    wrapper.scroll({top: st,left: sl,behavior:b });

}

function capitalizeFirstLetter(string) {return string.charAt(0).toUpperCase() + string.slice(1)}



///================================SCROLLER===============================


let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

wrapper.addEventListener("mousedown", e => {
  isDown = true;
  wrapper.classList.add("active");
  startX = e.pageX - wrapper.offsetLeft;
  startY = e.pageY - wrapper.offsetTop;
  scrollLeft = wrapper.scrollLeft;
  scrollTop = wrapper.scrollTop;
});
wrapper.addEventListener("mouseleave", () => {
  isDown = false;
  wrapper.classList.remove("active");
});
wrapper.addEventListener("mouseup", () => {
  isDown = false;
  wrapper.classList.remove("active");
});
wrapper.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - wrapper.offsetLeft;
  const y = e.pageY - wrapper.offsetTop;
  const walkX = x - startX;
  const walkY = y - startY;
  wrapper.scrollLeft = scrollLeft - walkX;
  wrapper.scrollTop = scrollTop - walkY;
});


//================================ CONSULTANTS

const consultants = document.getElementsByClassName("consultant")
for (consultant of consultants)consultant.addEventListener("click", found_consultant);

//==============================BUTTON LOGIC





const go_to_game = document.getElementById("go_to_game");
const start_game = document.getElementById("start_game");
const keep_looking = document.getElementById("keep_looking");
const incriminate = document.getElementById("incriminate");
const try_again = document.getElementById("try_again");
const play_again = document.getElementById("play_again");

go_to_game.style.display = "block";




function found_consultant (e){
    e.target.style.opacity = 1; 
    cover_screen.style.display = "flex";
    small_img.src = "img/profile_img/" + e.target.id.toUpperCase() + ".png"
    header.innerHTML =  capitalizeFirstLetter(e.target.id.split("_")[0]);
    let surname =  e.target.id.split("_")[1];
    sub_header.innerHTML =(surname)?  "("+capitalizeFirstLetter(surname)+")" :"";
    txt.innerHTML = dialogue[e.target.id];  
    keep_looking.style.display = "inline-block";0
    incriminate.style.display = "inline-block"; 
}


go_to_game.addEventListener("click", e=>{
    header.innerHTML = "Who  [...]  amongst Hectors?"
    txt.innerHTML = "Ask around to figure out!";
    start_game.style.display = "block";
    go_to_game.style.display = "none";   
})

start_game.addEventListener("click", e=>{
    start_game.style.display = "none";
    keep_looking.style.display = "inline-block";
    incriminate.style.display = "inline-block";
    cover_screen.style.display = "none";
    small_img.style.height = "8em";
    resize_img(1.3, "smooth");
    
})


keep_looking.addEventListener("click", e=>{

    cover_screen.style.display = "none"; 
})


incriminate.addEventListener("click", e=>{
    sub_header.innerHTML = "";
    incriminate.style.display = "none";
    if (header.innerHTML == "Hector" ){
        keep_looking.style.display = "none";
        play_again.style.display = "block";
        header.innerHTML = "That's right. You WIN!"
        txt.innerHTML  = "Hector's idea was indeed the best" 
    }else{
        header.innerHTML = "A great idea indeed, but we've got better!"
        txt.innerHTML  = "You should probably keep looking" 
    }
   
   
})

play_again.addEventListener("click", e=>{

  location.reload();
})



for (consultant of consultants){
    let preImg = new Image();

    preImg.src = "img/profile_img/" + consultant.id.toUpperCase() + ".png"
}
   

});



