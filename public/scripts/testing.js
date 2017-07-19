var aNumbers = [];
var iCurrentNumber = '';
var iResult=0;
function calculate(iNumber){
	iCurrentNumber = iCurrentNumber + iNumber; 
	document.getElementById("resultInput").value = iCurrentNumber;
	console.log(iCurrentNumber);
}

function sign(iSign){
	
	//aNumbers.push(iCurrentNumber);

	switch(iSign) {
		case '+': 
		parseInt(iCurrentNumber);
		aNumbers.push(iCurrentNumber);
		aNumbers.push(iSign);
		iResult = iResult + parseInt(iCurrentNumber);
		break;

		case '-': 
		parseInt(iCurrentNumber);
		aNumbers.push(iCurrentNumber);
		aNumbers.push(iSign); 
		if(iResult !=0) {iResult = iResult - parseInt(iCurrentNumber);}
		
		break;

		case '*': 
		aNumbers.push(iSign);
		break;
		
		case '/': 
		aNumbers.push(iSign);
		break;
		
		case '=': 
		// iResult=0;
		// aNumbers.push(iCurrentNumber);
		// for (var i = 0; i < aNumbers.length; i++) {
		// 	if(aNumbers[i] == '+') {
		// 		iResult = iResult + parseInt(aNumbers[i-1]) + parseInt(aNumbers[i+1]);
		// 	}
		// 	console.log(aNumbers[i]);
		// 	console.log(iResult);
		aNumbers.push(iCurrentNumber);
		iResult = iResult + parseInt(iCurrentNumber);
		document.getElementById('calculationInput').value = aNumbers.join(" ");
		document.getElementById('resultInput').value = iResult;
		// }
		break;
	}
	document.getElementById('resultInput').value = iResult;
	document.getElementById('calculationInput').value = aNumbers.join(" ");
	iCurrentNumber = '';
	console.log("iCurrentNumber=" + iCurrentNumber);
	console.log("aNumbers=" + aNumbers);
}

function clearResult(){
	aNumbers = [];
	iCurrentNumber = 0;
	iResult =0
	document.getElementById('calculationInput').value = 0;
	document.getElementById('resultInput').value = 0;
	console.log("iCurrentNumber=" + iCurrentNumber);
	console.log("aNumbers=" + aNumbers);
}