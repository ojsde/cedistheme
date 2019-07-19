document.addEventListener('DOMContentLoaded', function (event) {
	console.log('Event started');
	if (!document.body.contains(document.getElementById('main-content'))) {
		const check = document.getElementsByClassName('page_contact');

		if (check.length == 0) {
			const contentBuffer = document.getElementById('pkp_content_main').children;
			console.log(contentBuffer);

			const wrapperElement = document.createElement('div');
			wrapperElement.id = 'main-content';
			wrapperElement.classList.add('page');
			wrapperElement.classList.add('page_custom');

			var i;
			var j = contentBuffer.length;
			for (i = 0; i < j; i++) {
				console.log(contentBuffer[0]);
				wrapperElement.appendChild(contentBuffer[0]);
			}

			document.getElementById('pkp_content_main').insertBefore(wrapperElement, document.getElementById('pkp_content_main').firstChild);
		}
	}
});
