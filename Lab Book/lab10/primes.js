window.onload = initAll;

function initAll() {
	var ans = prompt("Enter a positive integer greater than 1","10");
	try {
		if (!ans || isNaN(ans) || ans <= 0 || Math.round(ans) != ans) {
			throw new Error("Not a valid number");
		}
		// call function here
		calculatePrimes(ans);
	}
	catch (errMsg) {
		alert(errMsg.message);
	}
}


function calculatePrimes(maxNumber){
	var primeString="";
	for(var testing=2;testing<=maxNumber;testing++){
		if(testForPrime(testing)){
			primeString+=testing+" , ";
		}
	}

	//to remove last comma
	var lastCommaIndex=primeString.lastIndexOf(",");
	if(lastCommaIndex!=-1){
		primeString=primeString.substring(0,lastCommaIndex);
	}

	displayPrimes(maxNumber,primeString);
}



function testForPrime(numberToTest){
	var modVal=Math.ceil(Math.sqrt(numberToTest));
	for(;modVal>1;modVal--){
		if(numberToTest%modVal==0){
			return false;
		}
	}
	//if numberToTest is prime returnd true
	return true;
}

function displayPrimes(maxNumber,primeString){
	document.write("Your maximun to check for prime: "+maxNumber+"<br>");
	if(primeString.length==0){
		document.write("There are no prime number within your maximum");
	}else{
		document.write("The Prime number up to your maximum: "+primeString);
	}
}