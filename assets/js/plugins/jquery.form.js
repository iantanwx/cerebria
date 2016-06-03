$('.md-form').submit(function(e) {
	e.preventDefault();

	var fields = $(':input').serializeArray();

	function onSubmit() {
		setTimeout(showSpinner, 300);
		submitForm();
	}

	function submitForm() {
		$.ajax({
			url: "https://formspree.io/ian@subversion.digital",
			method: "POST",
			data: fields,
			dataType: "json",
		})
		.done(function() {
			showFlashSuccess();
		})
		.fail(function() {
			showFlashFail();
		});
	}

	function hideForm() {
		$('.md-form')
			.animate({
				height: 0 
			}, {
			duration: 300,
			complete: onSubmit
		});
	}


	function showSpinner() {
		$('.spinner').css({
			display: 'block',
			opacity: 1
		});
	}

	function hideSpinner() {
		$('.spinner').css({
			display: 'none',
			opacity: 0
		});
	}

	function showFlashSuccess() {
		hideSpinner();
		$('.success-flash')
			.addClass('bounceIn');
	}

	function showFlashFail() {
		hideSpinner();
		$('.fail-flash')
			.addClass('bounceIn');
	}

	hideForm();
});

$('.reset-button').on('click', function(e) {
	function resetForm() {
		$('.success-flash, .fail-flash')
			.removeClass('bounceIn')
			.addClass('bounceOut');

		$('.md-form')
			.trigger('reset')
			.css({ height: 'auto' });
	}

	resetForm();
});