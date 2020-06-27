$("ul").on("click", "li", function(){   // should not choose li directly, or future added todos won't inherit the eventlisteners
    $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){$(this).remove()});
    e.stopPropagation();  // to prevent "bubble event"
});
$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        var new_todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + new_todo + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
