		function submitToSpop(a) {
			$(a).on('submit', function(e) {
				e.preventDefault(); //prevents page refresh
				$.ajax({
					type: "post",
					url: $(a).attr('action'),
					data: $(this).serialize(),
					success: function(data) {
						console.log("Success, data submitted to Spop!");
					}
				});
			});
			$(a).submit();
		}
