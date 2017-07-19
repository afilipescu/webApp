var aNumbers = [];
var iCurrentNumber = '';
function calculate(iNumber){
	iCurrentNumber = iCurrentNumber + iNumber; 
	document.getElementById("resultInput").value = iCurrentNumber;
	console.log(iCurrentNumber);
}

function sign(iSign){
	parseInt(iCurrentNumber);
	//aNumbers.push(iCurrentNumber);

	switch(iSign) {
		case '+': 
		aNumbers.push(iCurrentNumber);
		aNumbers.push(iSign);

		break;

		case '-': 
		aNumbers.push(iCurrentNumber);
		aNumbers.push(iSign); 
		break;
		case '*': 
		aNumbers.push(iSign);
		break;
		case '/': 
		aNumbers.push(iSign);
		break;
		case '=': 
		for (var i = 0; i < aNumbers.length; i++) {
			console.log(aNumbers[i]);
		}
		break;
	}
	
	document.getElementById('calculationInput').value = aNumbers;
	iCurrentNumber = '';
	console.log("iCurrentNumber=" + iCurrentNumber);
	console.log("aNumbers=" + aNumbers);
}

function clearResult(){
	aNumbers = [];
	iCurrentNumber = '';
	document.getElementById('calculationInput').value = "";
	document.getElementById('resultInput').value = "";
	console.log("iCurrentNumber=" + iCurrentNumber);
	console.log("aNumbers=" + aNumbers);
}