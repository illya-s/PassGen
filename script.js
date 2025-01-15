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
	$('#reGenBrn').on('click', function (e) {
		gen_pass()
	})

	function gen_pass() {
		const length = parseInt($('#password-length').val()) || 8;
		const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
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