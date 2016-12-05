var oHtml = document.getElementById('html');
function reszie(){
	var cWidth = document.documentElement.clientWidth;
	if(cWidth >= 750) cWidth = 750;
	oHtml.style.fontSize = parseInt(cWidth/64 * 10) + 'px';
}

window.onresize = function(){
	reszie();
};

reszie();