window.onload = initAll;

function initAll() {	
	var ans = prompt("Enter a positive number","");
	try{
		if(!ans || isNaN(ans) || ans<0){
			throw new Error("Not a Valid number");
		}
		var sqrt=Math.sqrt(ans);
		var message="The square root of "+ans+" is "+sqrt;
		alert(message);
		document.write(message);
	}catch(errMsg){
		alert(errMsg.message);
	}
	
	
}