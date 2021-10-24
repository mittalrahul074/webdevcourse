function CheckEmail(emailid){
	var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	if(regex.test(emailid.value)==false){
		alert("Please enter a valid email!");
		return false;
	}
	console.log(emailid);
	return check();
}

var email = document.getElementById('email');
var pass = document.getElementById('pass');
function check(){
	console.log(email+"  "+pass);
}