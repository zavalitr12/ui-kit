$(".like-btn").click(function(e){
    $(".like-btn").toggleClass("like-btn_disabled");
    if($(".like-btn__icon").text()=="favorite_border")
        $(".like-btn__icon").text("favorite");
    else
        $(".like-btn__icon").text("favorite_border");
});