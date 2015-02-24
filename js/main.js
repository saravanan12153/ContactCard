$(document).ready(function() {
	$('input').val("");
	$('textarea').val("");
});

//Get value of input fields and print to card
$(document).on('click', 'button.add', function() {
	$firstName = $('#firstName').val();
	$lastName = $('#lastName').val(); 
	$description = $('#description').val(); 

	$('.col-right').append("<div class='card'><div class='front'><h1>"+$firstName+" " +$lastName+"</h1><p>Click for a description</p></div><div class='back hide'><p>"+$description+"</p></div></div>");

	$('input').val("");
	$('textarea').val("");
});

//Swith between card back and card front
$(document).on('click', '.front', function() {
	$(this).hide();
	$(this).siblings().show();
});

$(document).on('click', '.back', function() {
	$(this).hide();
	$(this).siblings().show();
});