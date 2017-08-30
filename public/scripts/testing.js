var aNumbers = [];
var sCurrentNumber = '';
var iResult=0;
var iCurrentNumber = 0;
var iPreviousNumber = 0;
var previousSign;
var hiddenResult = 0;

function getNumber(iCurrentNumber) {
	sCurrentNumber = sCurrentNumber + iCurrentNumber; 
	document.getElementById("resultInput").value = sCurrentNumber;

	if(aNumbers.length > 1) {
		iPreviousNumber = aNumbers[aNumbers.length-2];
		previousSign = aNumbers[aNumbers.length-1];
	}
}

function sign(iSign){

	switch(iSign) {
		case '+': 

		iCurrentNumber= parseInt(sCurrentNumber);
		aNumbers.push(iCurrentNumber);
		if(previousSign == "-") {
			if(aNumbers.length == 3) {
				iResult = iPreviousNumber - iCurrentNumber;
			}else if(aNumbers.length > 3) {
				iResult = iResult - iCurrentNumber;
			}
		}else if(previousSign == "+") {
			if(aNumbers.length == 3) {
				iResult = iPreviousNumber + iCurrentNumber;
			}else if(aNumbers.length > 3) {
				iResult = iResult + iCurrentNumber;
			}
		}
		aNumbers.push(iSign);

		break;

		case '-': 

		iCurrentNumber = parseInt(sCurrentNumber);
		aNumbers.push(iCurrentNumber);

		if(previousSign == "+") {
			if(aNumbers.length == 3) {
				iResult = iPreviousNumber + iCurrentNumber;
			}else if(aNumbers.length > 3) {
				iResult = iResult + iCurrentNumber;
			}
		}else if (previousSign == "-") {
			if(aNumbers.length == 3) {
				iResult = iPreviousNumber - iCurrentNumber;
			}else if(aNumbers.length > 3) {
				iResult = iResult - iCurrentNumber;
			}
		}
		aNumbers.push(iSign); 

		break;

		case '*': 
		aNumbers.push(iSign);
		break;

		case '/': 
		aNumbers.push(iSign);
		break;

		case '=': 
		iCurrentNumber = parseInt(sCurrentNumber);
		aNumbers.push(iCurrentNumber);

		if(aNumbers[aNumbers.length-2] == "+") {
			iResult = iResult + iCurrentNumber;
		}else if(aNumbers[aNumbers.length-2] == "-") {
			if(aNumbers.length == 3) {
				iResult = iPreviousNumber - iCurrentNumber;	
			}else {
				iResult = iResult - iCurrentNumber;		
			}
			
		}
		
		document.getElementById('calculationInput').value = aNumbers.join(" ");
		document.getElementById('resultInput').value = iResult;
		break;
	}
	document.getElementById('resultInput').value = iResult;
	document.getElementById('calculationInput').value = aNumbers.join(" ");
	sCurrentNumber = '';
	// console.log("sCurrentNumber=" + sCurrentNumber);
	// console.log("aNumbers=" + aNumbers);
}

function clearResult(){
	aNumbers = [];
	sCurrentNumber = '';
	iResult=0;
	iCurrentNumber = 0;
	document.getElementById('calculationInput').value = 0;
	document.getElementById('resultInput').value = 0;
	console.log("sCurrentNumber=" + sCurrentNumber);
	console.log("aNumbers=" + aNumbers);
}

