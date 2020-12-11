window.addEventListener("load", e=>{



const bg = document.getElementById("bg");
const consultants = document.getElementsByClassName("consultant")
const cover_screen = document.getElementById("cover_screen");
const img_container = document.getElementById("img_container");
const wrapper = document.getElementById("wrapper");

const small_img = document.getElementById("small_img");
const header = document.getElementById("header");
const txt = document.getElementById("txt");

const start_game = document.getElementById("start_game");
const go_to_game = document.getElementById("go_to_game");
const keep_looking = document.getElementById("keep_looking");
const incriminate = document.getElementById("incriminate");

const ratio  =  bg.width / bg.height;
const win_count = consultants.length; 
var found_count = 0;

var size_coef = 1.001;



//================================OBSERVER

// background.addEventListener('transitionend', function(e){

//         img_container.style.width = background.width+"px";
//     img_container.style.height = background.height+"px";
// });
            


// var observer = new MutationObserver(function(mutations) { 
//     img_container.style.width = background.width+"px";
//     img_container.style.height = background.height+"px";
// });

// observer.observe(background, { attributes : true, attributeFilter : ['width'] });


//==================================STEPS



function runResize(e,b = "smooth"){
    const new_width = size_coef* Math.max(window.innerWidth, window.innerHeight *ratio) ;
    img_container.style.width = new_width+"px";
    img_container.style.height = (new_width /ratio )+"px";
    var st =(wrapper.scrollHeight - wrapper.clientHeight) / 2;
    var sl= (wrapper.scrollWidth - wrapper.clientWidth) / 2;
    wrapper.scroll({top: st,left: sl,behavior:b }); //smooth
}



// window.addEventListener('resize', runResize);
runResize(null,"auto")

img_container.style.transition = "width 1s ease-in-out,height 1s ease-in-out"

for (consultant of consultants)consultant.addEventListener("click", found_consultant);

go_to_game.addEventListener("click", e=>{
    header.innerHTML = "Who  [...]  amongst Hectors?"
    txt.innerHTML = "Ask around to figure out!";
    // small_img.src = "pika2.png"
    start_game.style.display = "block";
    go_to_game.style.display = "none";   
})

start_game.addEventListener("click", e=>{
    start_game.style.display = "none";
    keep_looking.style.display = "inline-block";
    incriminate.style.display = "inline-block";
    cover_screen.style.display = "none";
    size_coef = 1.3;
    runResize(null, "smooth");
    
})


keep_looking.addEventListener("click", e=>{
    keep_looking.style.display = "inline-block";
    incriminate.style.display = "inline-block";
    cover_screen.style.display = "none"; 
})


function found_consultant (e){
    e.target.style.opacity = 0.6; 
    cover_screen.style.display = "flex";
    small_img.src = "profile_img/" + e.target.id + ".png"
    header.innerHTML = capitalizeFirstLetter( e.target.id);
    var img = document.createElement('img'); 
    img.src = "./check.svg"
    txt.innerHTML = dialogue[e.target.id];
    console.log(found_count);

    if(found_count >= win_count) win();
   
}


function capitalizeFirstLetter(string) {return string.charAt(0).toUpperCase() + string.slice(1)}

function win(){
    win_screen.style.display = "flex"

}



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


// 
//     img_container.style.cursor = 'grab';

//     let pos = { top: 0, left: 0, x: 0, y: 0 };

//     const mouseDownHandler = function(e) {
//         img_container.style.cursor = 'grabbing';
//         img_container.style.userSelect = 'none';

//         pos = {
//             left: img_container.scrollLeft,
//             top: img_container.scrollTop,
//             // Get the current mouse position
//             x: e.clientX,
//             y: e.clientY,
//         };

//         document.addEventListener('mousemove', mouseMoveHandler);
//         document.addEventListener('mouseup', mouseUpHandler);
//     };

//     const mouseMoveHandler = function(e) {
//         // How far the mouse has been moved
//         const dx = e.clientX - pos.x;
//         const dy = e.clientY - pos.y;

//         // Scroll the element
//         img_container.scrollTop = pos.top - dy;
//         img_container.scrollLeft = pos.left - dx;
//     };

//     const mouseUpHandler = function() {
//         img_container.style.cursor = 'grab';
//         img_container.style.removeProperty('user-select');

//         document.removeEventListener('mousemove', mouseMoveHandler);
//         document.removeEventListener('mouseup', mouseUpHandler);
//     };

//     // Attach the handler
//     img_container.addEventListener('mousedown', mouseDownHandler);
// 

});