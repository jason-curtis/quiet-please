
$(document).ready(function(){
	$('*').filter(
		function(){
			return $(this).text().match(/^[^a-z]+$/)
		}
	).css('text-transform','lowercase')
})