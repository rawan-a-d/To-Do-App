$('input').keypress(function(event){
	// When enter is pressed
	if(event.which === 13){
		// add the todo to the ul
		$("ul").append('<li class="item"><span class="delete"> X </span> ' + $(this).val() + '</li>');
		// empty the input
		$(this).val("");
	}	
});

// When the plus sign is clicked
$('#toggleInput').click(function(){
	// Toggle the input
	$('input').toggle();
});

$(document)
	// when hover over  li
	.on("mouseenter", "li", function() {
		// Display the span (trash can)
		$(this).children().show();
	})
	// when leaveing li
	.on("mouseleave", "li", function() {
		// Hide the span (trash can)
		$(this).children().hide();
	})
	// Delete a todo
	.on("click", ".delete", function(){
		$(this).parent().remove();
	})