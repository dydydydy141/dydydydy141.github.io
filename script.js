var numberToUrl = 3;

function nexturl() {
	document.location.href = document.location.href + "/test";
}

function title() {
	document.title = 'Wait... ' + numberToUrl;
	numberToUrl = numberToUrl - 1
	if (numberToUrl < 0) {
		nexturl();
	}
}

title();

let timer = setInterval(title, 1000);
