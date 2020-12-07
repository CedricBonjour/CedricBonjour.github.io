
const consultants = document.getElementsByClassName("consultant")
const bg = document.getElementById("background");
const cover_screen = document.getElementById("cover_screen");
const img_container = document.getElementById("img_container");

const small_img = document.getElementById("small_img");
const header = document.getElementById("header");
const txt = document.getElementById("txt");

const start_game = document.getElementById("start_game");
const go_to_game = document.getElementById("go_to_game");
const keep_looking = document.getElementById("keep_looking");
const incriminate = document.getElementById("incriminate");

const win_count = consultants.length; 
var found_count = 0;


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function scrollCenter(b = "smooth"){
    var st =(img_container.scrollHeight - img_container.clientHeight) / 2;
    var sl= (img_container.scrollWidth - img_container.clientWidth) / 2;
    img_container.scroll({top: st,left: sl,behavior:b }); //smooth
}


scrollCenter("auto")





for (consultant of consultants)consultant.addEventListener("click", found_consultant);

go_to_game.addEventListener("click", e=>{
    header.innerHTML = "Qui a mangé les muffins de pikachu?"
    txt.innerHTML = "Pikachu c'est fait volé ses muffins. Aidez le à mener l'enquête en interogeant les differents pokémeon.";
    small_img.src = "pika2.png"
    start_game.style.display = "block";
    go_to_game.style.display = "none";   
})

start_game.addEventListener("click", e=>{
    start_game.style.display = "none";
    keep_looking.style.display = "inline-block";
    incriminate.style.display = "inline-block";
   
   
    cover_screen.style.display = "none";
    var bgs = document.getElementsByClassName("bg");
    for (img of bgs)img.classList.toggle("size");
    
})


keep_looking.addEventListener("click", e=>{
    keep_looking.style.display = "inline-block";
    incriminate.style.display = "inline-block";
    cover_screen.style.display = "none"; 
})


function found_consultant (e){
    e.target.style.opacity = 1;
    cover_screen.style.display = "flex";
    small_img.src = "profile_img/" + e.target.id + ".png"
    header.innerHTML = capitalizeFirstLetter( e.target.id);
    var img = document.createElement('img'); 
    img.src = "./check.svg"
    txt.innerHTML = dialogue[e.target.id];
    console.log(found_count);

    if(found_count >= win_count) win();
   
}


function win(){
    win_screen.style.display = "flex"

}