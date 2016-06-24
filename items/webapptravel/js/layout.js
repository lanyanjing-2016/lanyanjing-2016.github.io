var initLayOut=function(){
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
	var metaEl = document.querySelector('meta[name="viewport"]');
	dpr = window.devicePixelRatio || 1;
	console.log(dpr)
	scale = 1 / dpr;
	rem = docEl.clientWidth * dpr / 10;
	metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');
	var getNewDPR=function(dpr){
		switch(true){
		case dpr<1:
			dpr=1;
			break;
		case 1:
			dpr=1;
			break;
		case dpr>1&&dpr<=2:
			dpr=2;
			break;
		case dpr>2&&dpr<=2.5:
			dpr=2.5;
			break;
		case dpr>2.5&&dpr<=2.75:
			dpr=2.75;
			break;
		case dpr>2.75&&dpr<=3:
			dpr=3;
			break;
		case dpr>3&&dpr<=4:
			dpr=4;
			break;
		case dpr>4:
			dpr=4;
			break;
		}
		return dpr;
	}
	
	docEl.setAttribute('data-dpr', getNewDPR(dpr));
	docEl.firstElementChild.appendChild(fontEl);
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
}