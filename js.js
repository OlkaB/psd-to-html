// ---------  ACCORDION ----------

var getBttns = document.getElementsByClassName("revealTxtBttn"), getBttnsLength = getBttns.length;
for (var i = 0; i < getBttnsLength; i++)  {
	getBttns[i].addEventListener("click", revealFunc);
}

function revealFunc(){
	var pToChange = document.getElementById(this.id).previousSibling.previousSibling, getBttnTxt = document.getElementById(this.id);
	if (getBttnTxt.textContent==="More"){
		pToChange.classList.add("revealedTxt");
		getBttnTxt.textContent = "Less";
	}
	else {
		pToChange.classList.remove("revealedTxt");
		getBttnTxt.textContent = "More";
	}
}



// ---------  PORTFOLIO FILTER ----------
var portfolioPics = document.getElementsByClassName("filter"), portfolioPicslength = portfolioPics.length;
for (var i=0; i<portfolioPicslength; i++){
	portfolioPics[i].addEventListener("click", porftolioFunc);
}

function linkStyling(arg){
	var thisLink = document.getElementById(arg.id), sibling = document.getElementById('filter').getElementsByTagName('span'), siblingLength = sibling.length;
	thisLink.className+=" active";
	for (var i=0; i<siblingLength; i++){
		if (sibling[i].id !== arg.id){
			sibling[i].className = "filter";
		}
	}
}

function filterFunc(arg) {
	if(arg.id === "web"){
		var elemToStyle = document.getElementsByClassName("printTag");
		for (var i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = "none";
		}
		elemToStyle = document.getElementsByClassName("webTag");
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = "initial";
		}
	}

	else if (arg.id === "print") {
		elemToStyle = document.getElementsByClassName("printTag");
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = "initial";
		}
		elemToStyle = document.getElementsByClassName("webTag");
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = "none";
		}
	}

	else if (arg.id === "all"){
		elemToStyle = document.getElementsByClassName("printTag");
		for (var i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = "initial";
		}
		elemToStyle = document.getElementsByClassName("webTag");
		for (vari=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = "initial";
		}
	}
}


function porftolioFunc(){
	filterFunc(this);
	linkStyling(this);
}




// ---------  PORTFOLIO MORE ITEMS ----------
document.getElementById("browseMore").addEventListener("click", browseMoreFunc);

function browseMoreFunc(){
	var galleryItm = document.getElementById("gallery"), itemToClone = galleryItm.getElementsByTagName('figure')[0];
	for (var i=0; i<6; i++){
		var cloned = itemToClone.cloneNode(true);
		galleryItm.appendChild(cloned);
	}
}




// ---------  CUSTOMERS' OPINION SWITCHER ----------
var diodes = document.getElementsByClassName("bttn"), diodesLength = diodes.length;
for (var i = 0; i < diodesLength; i++) {
	diodes[i].addEventListener("click", diodeChange);
}

function diodeChange() {
	this.className = this.className == "bttn diode" ? "bttn currentUse" : "bttn diode";

	for (var j = 0; j < diodesLength; j++) {
		if (diodes[j].id !== this.id) {
			diodes[j].className = "bttn diode";
		}
	}

	var citeTxt = document.getElementById("cite"), citeAuthor = document.getElementById("author"), customerImg = document.getElementById("customerPic");
	switch (this.id) {
		case "one":
		citeTxt.textContent = "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.";
		citeAuthor.textContent = "John Doe";
		customerImg.src = "http://placehold.it/350x350";
		break;

		case "two":
		citeTxt.textContent = "We can never obtain peace in the outer world until we make peace with ourselves";
		citeAuthor.textContent = "Dalai Lama";
		customerImg.src = "http://placehold.it/250x250";
		break;

		case "three":
		citeTxt.textContent = "Try not to become a man of success, but rather try to become a man of value. ";
		citeAuthor.textContent = "Albert Einstein";
		customerImg.src = "http://placehold.it/350x350";
		break;

		case "four":
		citeTxt.textContent = "You must be the change you wish to see in the world.";
		citeAuthor.textContent = "Mahatma Gandhi";
		customerImg.src = "http://placehold.it/450x450";
		break;
	}
}


// ---------  MAP ----------
window.addEventListener("load", myMap);

function myMap() {
	var myCenter = new google.maps.LatLng(-8.249410364624302,112.76815445), mapCanvas = document.getElementById("map"), mapOptions = {center: myCenter, zoom: 12, draggable: false, scrollwheel: false}, map = new google.maps.Map(mapCanvas, mapOptions), marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}

// ------------ smooth scrolling - not mine
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    }
  }
});