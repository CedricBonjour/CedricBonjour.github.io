var pricing = document.getElementsByClassName("pricing");


for (var btn of pricing ){
  btn.addEventListener('click', e=>{
    document.getElementById('priceSlct').removeAttribute('id');
    e.target.setAttribute("id", "priceSlct");
  })
}




(function() {
  var stripe = Stripe('pk_live_TxSh35V81KbL9NV8xVQEjlfZ00SG4u0MDt');
  document.getElementById('donate').addEventListener('click', function () {
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1GsQsUHQxLPgR6iwHkqqClkD', quantity: Number(document.getElementById("priceSlct").innerText)}],
      mode: 'payment',
      successUrl: 'https://CedricBonjour.github.io/NanoCell/success.html',
      cancelUrl: 'https://cedricbonjour.github.io/NanoCell/home.html',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();


(function() {
  var stripe = Stripe('pk_live_TxSh35V81KbL9NV8xVQEjlfZ00SG4u0MDt');
  document.getElementById('subscribe').addEventListener('click', function () {
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1GsThXHQxLPgR6iwQjsuwkEw', quantity: Number(document.getElementById("priceSlct").innerText)}],
      mode: 'subscription',
      successUrl: 'https://CedricBonjour.github.io/NanoCell/success.html',
      cancelUrl: 'https://cedricbonjour.github.io/NanoCell/home.html',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();