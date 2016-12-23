// ---------  ACCORDION ----------

var getBttns = document.getElementsByClassName("revealTxtBttn");
for (i = 0; i < getBttns.length; i++)  {
getBttns[i].addEventListener("click", revealFunc);
}

function revealFunc(){
console.log(document.getElementById(this.id).textContent);
var pToChange = document.getElementById(this.id).previousSibling.previousSibling;
var bttnTxt = document.getElementById(this.id);
if (document.getElementById(this.id).textContent==="More"){
pToChange.classList.add("revealedTxt");
bttnTxt.textContent = "Less";
}
else {
pToChange.classList.remove("revealedTxt");
bttnTxt.textContent = "More";
}
}



// ---------  PORTFOLIO FILTER ----------
var portfolioPics = document.getElementsByClassName("filter");
for (i=0; i<portfolioPics.length; i++){
portfolioPics[i].addEventListener("click", porftolioFunc);
}

function linkStyling(arg){
	console.log("1works");
	var thisLink = document.getElementById(arg.id);
	console.log(arg);
	thisLink.className+=" active";
	var sibling = document.getElementById('filter').getElementsByTagName('span');
	for (i=0; i<sibling.length; i++){
		if (sibling[i].id !== arg.id){
			sibling[i].className = "filter";
		}
	}
}

function filterFunc(arg) {
if(arg.id === "web"){
var elemToStyle = document.getElementsByClassName("printTag");
for (i=0; i<elemToStyle.length; i++){
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
for (i=0; i<elemToStyle.length; i++){
elemToStyle[i].style.display = "initial";
}
elemToStyle = document.getElementsByClassName("webTag");
for (i=0; i<elemToStyle.length; i++){
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
	var galleryItm = document.getElementById("gallery");
	var itemToClone = galleryItm.getElementsByTagName('figure')[0];
	var cloned = itemToClone.cloneNode(true);
	var iLoop = 6;
	for (iLoop; iLoop<iLoop+6; iLoop++){
		galleryItm.appendChild(cloned);
		console.log(i);
	}
}





// ---------  CUSTOMERS' OPINION SWITCHER ----------
var diodes = document.getElementsByClassName("bttn");
for (i = 0; i < diodes.length; i++) {
diodes[i].addEventListener("click", diodeChange);
}

function diodeChange() {
this.className = this.className == "bttn diode" ? "bttn currentUse" : "bttn diode";

for (j = 0; j < diodes.length; j++) {
if (diodes[j].id !== this.id) {
diodes[j].className = "bttn diode";
}
}

var citeTxt = document.getElementById("cite");
var citeAuthor = document.getElementById("author");
var customerImg = document.getElementById("customerPic;");
switch (this.id) {
case "one":
citeTxt.textContent = "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.";
citeAuthor.textContent = "John Doe";
break;

case "two":
citeTxt.textContent = "We can never obtain peace in the outer world until we make peace with ourselves";
citeAuthor.textContent = "Dalai Lama";
break;

case "three":
citeTxt.textContent = "Try not to become a man of success, but rather try to become a man of value. ";
citeAuthor.textContent = "Albert Einstein";
break;

case "four":
citeTxt.textContent = "You must be the change you wish to see in the world.";
citeAuthor.textContent = "Mahatma Gandhi";
break;
}
}


// ---------  MAP ----------
window.addEventListener("load", myMap);

function myMap() {
var myCenter = new google.maps.LatLng(-8.249410364624302,112.76815445);
var mapCanvas = document.getElementById("map");
//var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false
var mapOptions = {center: myCenter, zoom: 12, draggable: false, scrollwheel: false};
var map = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}