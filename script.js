
let arayyy = []
function number(){
	var num = parseInt(document.querySelector(".input1").value);
	arayyy.push(num);
	var div = document.querySelector(".alert-shownumber");
		div.innerHTML = arayyy;


}
function sum(){
	var div = document.querySelector(".alert_result");
		sum =  eval(arayyy.join('+')); 
	div.innerHTML = sum;
	
}
function avg(){
	var div = document.querySelector(".alert_result");
		sum =  eval(arayyy.join('+')); 	
		avg = sum/arayyy.length;
	div.innerHTML = avg;
	
}
function product(){
	var div = document.querySelector(".alert_result");
		sum =  eval(arayyy.join('*')); 
	div.innerHTML = sum;
	
}