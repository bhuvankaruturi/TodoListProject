
$("h1").on("click","i", function(){
	$("input[type='text']").toggleClass("hide");
})

$("#container").on("click","li", function(){
	$(this).toggleClass("strikeThrough")
});

$("#container").on("mouseenter","li", function(){
	$(this).children("i").css("display", "inline-block");
});

$("#container").on("mouseleave","li", function(){
	$(this).children("i").css("display", "none");
});

$("#container").on("click", "li > i", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if (event.which === 13){
		$("#container").append("<li><i class='far fa-trash-alt fa-xs delete'></i>" + $(this).val() + "</li>");
		this.value = "";
	}
});