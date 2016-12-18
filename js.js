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



// ---------  PORTFOLIO ----------
var portfolioPics = document.getElementsByClassName('filter');
for (i=0; i<portfolioPics.length; i++){
	portfolioPics[i].addEventListener('click', filterFunc);
}

console.log(portfolioPics);

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