document.getElementById("apply").onclick = onetwo;
document.getElementById("apply1").onclick = ten;
function onetwo() {
	var userNum = document.getElementById('userNum').value;
	var res = "";
	var resOst = 0;
	do{
		
		if(ost(userNum)) {
			res += "1";
		}
		else{
			res += "0";
		}
		userNum = del(userNum);
	}
	while(userNum >= 2);

	if(ost(userNum)) {
			res += "1";
		}
		else{
			res += "0";
		}
	res = res.split("");
	out = res.reverse();
	out = out.join("");
	alert(out);

}

function ten(){
	var userNum = document.getElementById('userNum1').value;
	var res = 0;
	for (var i = 0; i < userNum.length; i++) {
		res = res * 2 + +userNum[i];
	}
	alert(res);
}

function del(num) {
	return Math.floor(num / 2);
}
function ost(num) {
	return num % 2;
}