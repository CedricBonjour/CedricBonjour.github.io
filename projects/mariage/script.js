





var b =  document.getElementById('menu_icn')


document.getElementById('menu_icn').addEventListener("click", ()=>{toggle_div("main-nav")})

document.getElementById('money_slider').addEventListener("input", e=>{
  amnt = [0,20,30,50,75,100,150,200,250,300,350,400,500,600,700,800,1000,1200,1500, 2000]
  document.getElementById('amount_donate').value=amnt[e.target.value]
})

for (var gc of document.getElementsByClassName('gift_card')){

    gc.addEventListener("click", e=>{
      e.target.classList.toggle("selected_gift")

  })
}





function toggle_div(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


window.addEventListener("hashchange", show_section, false);

function show_section(){

  h = window.location.hash.substring(1) ;
  for (var s of document.getElementsByTagName("section")) s.style.display = "none";
  if (h.length==0) document.getElementById("header").style.display = "flex";
  else document.getElementById(h).style.display = "flex";
  
  // document.getElementById("header").style.display = "none"
  document.getElementById("main-nav").style.display = "none"

}

show_section()

function send_message(){
  var request = new XMLHttpRequest();
  var d = new Date();
  var n = d.getTime();
  var url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdrQxhHYYkNDrP6BXcRs1xtl575Sm0fa8LdSe6L_HS38E3kDw/formResponse';
  var data = { "entry.1993191251": "some_test txt" };
  txt = document.getElementById("msg").value
  txt+="\n---------------"
  txt += "\n\n["+document.getElementById("amount_donate").value+"]euros"
  for (var sg of document.getElementsByClassName('selected_gift')){txt += "\n - "+sg.innerText.trim()}
  q = "entry.1993191251="+encodeURIComponent(txt) 
  console.log(txt)
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(q);
}


(function() {
  
  var stripe = Stripe('pk_live_TxSh35V81KbL9NV8xVQEjlfZ00SG4u0MDt');
  document.getElementById('donate').addEventListener('click', function () {
    send_message()
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1KspELHQxLPgR6iw6g80jQ4i', quantity: Number( document.getElementById('amount_donate').value)}],
      mode: 'payment',
      successUrl: 'https://CedricBonjour.github.io/projects/mariage/success.html',
      cancelUrl: 'https://cedricbonjour.github.io/projects/mariage/home.html',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();




