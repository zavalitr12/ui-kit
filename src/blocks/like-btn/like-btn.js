$(".like-btn").click(function(e){
    
    var likes =  $(this).children('.like-btn__likes').text();

    if($('.like-btn_disabled').length!=0){
        
        likes++;

        $('.like-btn__likes').text(likes);

        $('.like-btn__icon').text('favorite');

        $('.like-btn').removeClass('like-btn_disabled');
    }
    else{
        
        likes--;

        $('.like-btn__likes').text(likes);

        $('.like-btn__icon').text('favorite_border');

        $('.like-btn').addClass('like-btn_disabled');
    }
    
});