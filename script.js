
Array.from(document.getElementsByClassName("detailed")).forEach(item => {
  item.addEventListener('click', event => {
    if(item.style.backgroundImage !='none')item.style.backgroundImage ='none';
    else item.style.backgroundImage ='url(nav/down.svg)';
    item.getElementsByTagName("description")[0].classList.toggle('show');
  })
})

