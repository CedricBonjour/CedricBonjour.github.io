let sections = Array.from(document.getElementsByTagName("section"))
let subs = Array.from(document.getElementsByTagName("span"))
let links = Array.from(document.getElementsByClassName("link"))
let misc = document.getElementById("misc")
let miscSlct = document.getElementById("miscSlct")
let miscSections = Array.from(misc.getElementsByTagName("section"))



function section_append(section, element){
	var divs = section.getElementsByTagName("div")
	var div = null;
	if (divs.length < 1) {
		div = document.createElement('div');
		section.append(div)
		section.classList.add("detailed")
 		section.addEventListener('click', event => {
			section.classList.toggle('bgImg');
			div.classList.toggle('show');	
 		})
	}else{div = divs[0]}
	div.append(element)
}


sections.forEach(section => {
	if (section.id!="contactCard"){
		var img = document.createElement('img');
	    img.src = "./img/org/"+section.id+".svg";
	    img.alt = "[" +section.id + " logo]";
		section.insertBefore(img, section.firstChild);
	}
})


subs.forEach(span => {
	var id=span.id.substring(4)
	var section = document.getElementById(id)
	section_append(section,span)
})

links.forEach(link => {
	var id=link.id.substring(3)

	var section = document.getElementById(id)
	section_append(section,link)
})


miscSections.forEach(section => {
	img = section.getElementsByTagName("img")[0].cloneNode()
	wrapper = document.createElement("span");
	wrapper.id = "icn_" + section.id
	wrapper.append(img)

	wrapper.addEventListener('click', event => {
			miscSections.forEach(s=>{s.style.display = "none"})
			id = event.target.id.substring(4);
			document.getElementById(id).style.display="inline-flex";

 		})

	
	miscSlct.append(wrapper)
})





////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////CHESS.COM API///////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function httpGetAsync(theUrl, callback, errHandler= null)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
		else if (xmlHttp.readyState == 4 && errHandler !==null) errHandler()
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


function chessHandle(resp){



	resp= JSON.parse(resp).chess_rapid
	console.log(resp)
	var chess_section = document.getElementById("sub_chess")
	var best_date = new Date((resp.best.date*1000))
	var last_date = new Date((resp.last.date*1000))
	// var last_date = Date(resp.last.date)
	console.log(best_date)
	console.log(last_date)
	var table = document.createElement("table");

	
	var r1 = document.createElement("tr");
	var r2 = document.createElement("tr");
	var r3 = document.createElement("tr");

	var h1 = document.createElement("th");
	var h2 = document.createElement("th");
	var h3 = document.createElement("th");

	var t11 = document.createElement("td");
	var t12 = document.createElement("td");
	var t13 = document.createElement("td");

	var t21 = document.createElement("td");
	var t22 = document.createElement("td");
	var t23 = document.createElement("td");

	h1.innerText = "Rapid Game (2x10min)"
	h2.innerText = "Rating"
	h3.innerText = "Date"



	t11.innerText = "Best";
	t12.innerText = resp.best.rating;
	t13.innerText = best_date.toISOString().split('T')[0]


	t21.innerText = "Last";
	t22.innerText = resp.last.rating;
	t23.innerText = last_date.toISOString().split('T')[0]


	r1.append(h1)
	r1.append(h2)
	r1.append(h3)
	r2.append(t11)
	r2.append(t12)
	r2.append(t13)
	r3.append(t21)
	r3.append(t22)
	r3.append(t23)


	table.append(r1)
	table.append(r2)
	table.append(r3)

	table.style.width="100%"
	table.style.textAlign="left"
	chess_section.style.textAlign="center"

	chess_section.append (table)

}

function chessErr(){

	var chess_section = document.getElementById("sub_chess");
	var err_div = document.createElement("code");
	err_div.innerText = ">> Could not reach the chess.com API"
	chess_section.append (err_div)

}


httpGetAsync("https://api.chess.com/pub/player/cerber666/stats", chessHandle, chessErr)
