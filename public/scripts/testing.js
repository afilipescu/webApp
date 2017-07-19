var aNumbers = [];
var iCurrentNumber = '';
var iResult=0;
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
		aNumbers.push(iCurrentNumber);
		for (var i = 0; i < aNumbers.length; i++) {
			if(aNumbers[i] == '+') {
				iResult = parseInt(aNumbers[i-1]) + parseInt(aNumbers[i+1]);
			}
			console.log(aNumbers[i]);
			console.log(iResult);
			document.getElementById('resultInput').value = iResult;
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