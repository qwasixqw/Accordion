'use strict';

const boxes = document.querySelectorAll('.box');


boxes.forEach((box) => {
	const label = box.querySelector('.label');
	const content = box.querySelector('.content');

	label.addEventListener('click', () => {
		if (box.classList.contains('active')) {
			content.style.maxHeight = 0;
			box.classList.remove('active');
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
			box.classList.add('active');
		}
	});

	content.addEventListener('click', (event) => {
		event.stopPropagation();
	});
});
