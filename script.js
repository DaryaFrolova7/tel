console.log('Заработало');

let textBlock = document.getElementById('blockOut');
textBlock.innerHTML = textBlock.innerHTML + '<p><b>Привет!</b></p>';

document.querySelector('h2').innerHTML = 2021;

//сработает при любом изменении
// document.querySelector('.i-1').oninput = function(event){
// 	console.log(event);
// }
// + 43
// -45
//(40
//41


document.querySelector('.i-1').onkeypress = function(e){
	let codeKeyPress = e.charCode;
	if (((codeKeyPress>=48) && (codeKeyPress<=57)) || (codeKeyPress==43) ||  (codeKeyPress==45) || (codeKeyPress==40) ||(codeKeyPress==41) )
	{return codeKeyPress;
	}
	else{
		return false;
	}
/*	console.log('onkeypress')
	console.log(e);
	console.log('charCode :' + e.charCode);
	console.log('code: ' + e.code);
	console.log('key: ' + e.key);
	console.log('keycode :' + e.keyCode);*/
}

document.querySelector('.telOut').onclick = function(event){
	document.querySelector('.tel').innerHTML=document.querySelector('.i-1').value;
}