function viduString(){
	var chuoi = 'bam oi Sang sang chieu chieu';
	alert(chuoi.length);
	alert(chuoi.charAt(1));
	chuoi=chuoi.concat(' , thuong con ....');
	alert(chuoi);
	var vitri = chuoi.indexOf('sang');
	alert(vitri);
	var vitri = chuoi.lastIndexOf('sang');
	alert(vitri);
	chuoi=chuoi.replace(new RegExp('sang', 'gi'), 'som');
	alert(chuoi);
	chuoi.sear
}
var a =100;
function tong2So (so1, so2) {
	return so1 + so2;
}

function testBien() {
	/*var a = 10;
	alert(typeof(a));
	var b ='abc';
	alert(typeof(b));
	var c='123';
	alert(typeof(c));
	var d=null;
	alert(typeof(d));
	var a =10;
	var b=20;
	var c=123;
	var d='123';
	alert(c==d);	//true
	alert(c===d);	//false
	alert(c!=d);	//false
	alert(c!==d && a<b);	//true
	alert(c!==d && a>b);	//false
	alert(c!==d || a>b);	//true
	var soluong=10;
	var kqua= (soluong>=10?"Giam gia":"Khong giam gia");
	alert(kqua);
	var add ="2+2";
	alert(add);
	alert(eval(add));
	document.writeln(parseFloat("320.35625")+"<br/>");
	document.writeln(parseFloat("32 54 698 kjhuy")+"<br/>");
	document.writeln(parseFloat("32")+"<br/>");
	document.writeln(parseFloat(0.3562)+"<br/>");
	document.writeln(parseFloat("jhyu 34 98")+"<br/>");*/
	var a=101;
	if(a%2 == 0) {
		alert("So chan");
	} else {
		alert("So le");
	}
}

function tinhSoNgay(nam, thang) {
	var soNgay;
	switch (thang)
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			soNgay = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			soNgay = 30;
			break;
		case 2:
			if(nam%400==0 || (nam%4==0 && nam%100!=0)){
				soNgay = 29;
			} else {
				soNgay = 28;
			}
			break;
		default:
			soNgay = "Error";
	}
	return soNgay;
}

function inBang9Chuong(n){
	// cach 1
	/*for(i=1;i<=10;i++){
		document.writeln(n +" x "+i+" = "+n*i+"<br/>");
	}*/
	
	// cach 2
	/*var i = 1;
	while (i<10){
		document.writeln(n +" x "+i+" = "+n*i+"<br/>");
		i++;
	}*/
	
	//cach 3
	var i =1;
	do{
		document.writeln(n +" x "+i+" = "+n*i+"<br/>");
		i++;
	} while (i<=10)
}