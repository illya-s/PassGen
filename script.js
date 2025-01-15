$(document).ready(function () {
	const passwordLength = $('#password-length');
	const passwordRange = $('#password-range');
	const copyBtn = $('#copyBtn');
	const passInput =  $('#generated-password');

	passwordLength.val(passwordRange.val())
	gen_pass()

	passwordRange.on('input', function () {
		passwordLength.val($(this).val())
	});
	passwordLength.on('input', function (e) {
		passwordRange.val($(this).val())
	});

	$('#password-length, #password-range').on('input', function (e) {
		gen_pass()
	})
	$('#reGenBtn').on('click', function (e) {
		gen_pass()
	})
	$(".pass-part").on('change', function() {
		if ($('.pass-part:checked').length === 0) {
			$(this).prop('checked', true);
		}
		gen_pass()
	})

	function gen_pass() {
		const length = parseInt($('#password-length').val()) || 8;
		var charset = '';

		$('.pass-part').each(function (i, element) {
			if ($(element).prop('checked')) {
				charset += $(element).data('val')
			}
		});

		console.log(charset.length)

		let password = '';
		
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length);
			password += charset[randomIndex];
		}
		
		$('#generated-password').val(password);
	}

	copyBtn.on('click', function (e) {
		passInput.select();
		document.execCommand('copy');
		alert('Password copied to clipboard!');
	})
});