
$("h1").on("click","i", function(){
	$("input[type='text']").slideToggle("linear");
})

$("#container").on("click","li", function(){
	$(this).toggleClass("strikeThrough")
});

$("#container").on("click", "li > span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if (event.which === 13){
		if ($(this).val() != ""){
			$("#container").append("<li><span><i class='far fa-trash-alt fa-xs delete'></i></span>" + $(this).val() + "</li>");
			this.value = "";
		}
	}
});