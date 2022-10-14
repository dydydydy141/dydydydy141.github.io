var numberToUrl = 0;

function nexturl() {
	document.location.href = document.location.href + "/test";
}

function title() {
	document.title = 'Wait... ' + Math.round(numberToUrl) + '%';
	numberToUrl = numberToUrl;
	if (numberToUrl >= 100) {
		document.title = 'Wait... ' + 100 + '%';
		document.location.href ="file:///C:/Users/Артемий/Desktop/KospoStudioSite/index.html";
	}
}

title();

let timer = setInterval(title, 10);



