$(document).ready(function() {
	const diceSide = $('.side');
	const rollButton = $('#rollButton');
	let interval;


	rollButton.click(function() {
		let targetNumber = Math.floor(Math.random() * 6);
		let currentNumber = 0;
		let speed = 100;

		function updateNumber() {
			currentNumber = (currentNumber + 1) % 6;

			if (speed > 20) {
				speed -= 10;
			}

			diceSide.each(function(i, element) {
				if (i == currentNumber) {
					$(this).css('display', 'grid');
				} else {
					$(this).css('display', 'none');
				}
			});

			if (currentNumber === targetNumber) {
				clearInterval(interval);
			}
		}

		if (interval) clearInterval(interval);
		interval = setInterval(updateNumber, speed);
	});
});
