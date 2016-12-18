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