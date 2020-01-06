//checking throught list
$("ul").on("click","li",function(){
	$(this).toggleClass("select");
});

//removing from the list
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

//append to the list
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var inputVal = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputVal + "</li>");
		$(this).val("");
	}
});

//when click on pad
$("h1 span").on("click",function(){
	$("input[type = 'text']").fadeToggle(400);
})