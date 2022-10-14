var numberToUrl = 3;

function nexturl() {
	document.location.href = document.location.href + "/test";
}

function title() {
	document.title = 'Wait... ' + numberToUrl;
	numberToUrl = numberToUrl - 1
	if (numberToUrl < 0) {
		document.location.href ="file:///C:/Users/Артемий/Desktop/KospoStudioSite/index.html";
	}
}

title();

let timer = setInterval(title, 1000);