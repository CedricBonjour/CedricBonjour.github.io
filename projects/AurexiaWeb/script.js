


function selected(card){
  cards = document.getElementsByClassName("card");
  for(var i = 0; i < cards.length; i++) cards[i].classList.remove("selected");
  card.classList.add("selected");
  
  
  slider = document.getElementById("slider");
  options = document.getElementById("options");
  premium = document.getElementById("premium");
  allOpt = document.getElementsByClassName("listOpt")
  
  for( i = 2; i < allOpt.length; i++) allOpt[i].classList.remove("mdc-list-item--activated");
  
  options.style.display="none";
  slider.style.display="none";
  premium.style.display="none";
  
  
  id = card.id;
  if(id == "persoCard"){
     options.style.display="block";
 
      slider.style.display="inline-block";
    for( i = 2; i < 4; i++) allOpt[i].classList.add("mdc-list-item--activated");
    slide(document.getElementById("coverage").innerHTML );
  }
  
  if(id == "zenCard"){
    options.style.display="block";
  premium.style.display="flex";
    for( i = 0; i < allOpt.length; i++) allOpt[i].classList.add("mdc-list-item--activated");
  }
  
}

var msgCount = 1;

function hideSections(){
  var divsToHide = document.getElementsByClassName("section"); //divsToHide is an array
  for(var i = 0; i < divsToHide.length; i++) divsToHide[i].style.display = "none"; // depending on what you're doing
    
}


function nextMessage(){
  var msgs = document.getElementsByClassName('msgContainer');
  if (msgCount< msgs.length) msgCount = msgCount+1;
  for(i = 0 ; i < msgCount; i++){
    msgs[i].style.display = "block";
     

  }
  window.scrollTo(0,document.body.scrollHeight);
}


function toggleMenu(){
  var yourUl = document.getElementById("menu");
  yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
}


function selectItem(item){
  item.classList.toggle("mdc-list-item--activated");
  slide(document.getElementById("coverage").innerHTML );
}


function slide (val){
  document.getElementById("coverage").innerHTML = val;
  var coef =  document.getElementsByClassName('listOpt mdc-list-item--activated').length-2;
  var r = 10;
  if(coef!=0) r+= Math.round(  val/(1500/coef));
  
  
  document.getElementById("price").innerHTML = r;
}

