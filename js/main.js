document.addEventListener('DOMContentLoaded', function (event) {
	if (!document.body.contains(document.getElementById('main-content'))) {
		var check = document.getElementsByClassName('page');

		if (check.length == 0) {
			wrapElements();
		} else if (check.length == 1 && check[0].classList.length == 1) {
			console.log('page found though classList only 1 long');
			wrapElements();
		}
	}
});

function wrapElements () {
	const contentBuffer = document.getElementById('pkp_content_main').children;

	const wrapperElement = document.createElement('div');
	wrapperElement.id = 'main-content';
	wrapperElement.classList.add('page');
	wrapperElement.classList.add('page_custom');

	var i;
	var j = contentBuffer.length;
	for (i = 0; i < j; i++) {
		if (contentBuffer[0].classList.contains('page')) {
			contentBuffer[0].classList.remove('page');
			contentBuffer[0].classList.add('page_content_wrapper');
		}
		wrapperElement.appendChild(contentBuffer[0]);
	}

	document.getElementById('pkp_content_main').insertBefore(wrapperElement, document.getElementById('pkp_content_main').firstChild);
}
