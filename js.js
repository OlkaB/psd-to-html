// ---------  ACCORDION ----------

var getBttns = document.getElementsByClassName('revealTxtBttn');
for (i = 0; i < getBttns.length; i++)  {
	getBttns[i].addEventListener('click', revealFunc);
}

function revealFunc(){
	console.log(document.getElementById(this.id).textContent);
	var pToChange = document.getElementById(this.id).previousSibling.previousSibling;
	var bttnTxt = document.getElementById(this.id);
	if (document.getElementById(this.id).textContent==="More"){
		pToChange.classList.add('revealedTxt');
		bttnTxt.textContent = "Less";
	}
	else {
		pToChange.classList.remove('revealedTxt');
		bttnTxt.textContent = "More";
	}
}



// ---------  PORTFOLIO FILTER ----------
var portfolioPics = document.getElementsByClassName('filter');
for (i=0; i<portfolioPics.length; i++){
	portfolioPics[i].addEventListener('click', filterFunc);
}

function filterFunc() {
	if(this.id === "web"){
		var elemToStyle = document.getElementsByClassName('printTag');
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = 'none';
		}
		var elemToStyle = document.getElementsByClassName('webTag');
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = 'initial';
		}

	}
	else if (this.id === "print") {
		var elemToStyle = document.getElementsByClassName('printTag');
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = 'initial';
		}
		var elemToStyle = document.getElementsByClassName('webTag');
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = 'none';
		}
	}
	else if (this.id === "all"){
		var elemToStyle = document.getElementsByClassName('printTag');
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = 'initial';
		}
		var elemToStyle = document.getElementsByClassName('webTag');
		for (i=0; i<elemToStyle.length; i++){
			elemToStyle[i].style.display = 'initial';
		}
	}
}


// ---------  CUSTOMERS' OPINION SWITCHER ----------
var diodes = document.getElementsByClassName("bttn");

for (i = 0; i < diodes.length; i++) {
	diodes[i].addEventListener('click', diodeChange);
}

function diodeChange() {
	this.className = this.className == 'bttn diode' ? 'bttn currentUse' : 'bttn diode';

	var citeTxt = document.getElementById('textOutput');
	switch (this.id) {
		case "one":
		citeTxt.textContent = "text one";
		break;
		case "two":
		citeTxt.textContent = "text two";
		break;
		case "three":
		citeTxt.textContent = "text three";
		break;
	}

	for (j = 0; j < diodes.length; j++) {
		if (diodes[j].id !== this.id) {
			diodes[j].className = 'bttn diode';
		}
	}
}


// ---------  MAP ----------
window.addEventListener('load', myMap);

function myMap() {
  var myCenter = new google.maps.LatLng(-8.249410364624302,112.76815445);
  var mapCanvas = document.getElementById("map");
  //var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false
  var mapOptions = {center: myCenter, zoom: 12, draggable: false, scrollwheel: false};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}