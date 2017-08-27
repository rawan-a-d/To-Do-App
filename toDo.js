$('input').keypress(function(event){
	// When enter is pressed
	if(event.which === 13){
		// add the todo to the ul
		$("ul").append('<li class="item">' + $(this).val() + '</li>');
		// empty the input
		$(this).val("")
	}	
});

