

$('.rate-group__item').click(function(){

    var rate = $(this).data('value');

    var grRate = $('.rate-group').attr('data-rate');

    if(rate==grRate){

        for(var i=0; i<=rate;i++)
            $(`.rate-group__item#${i}`).children().text('star_border');

        rate = 0;
    }
    else
        for(var i=0; i <= 5; i++){
            if(rate>=i)
                $(`.rate-group__item#${i}`).children().text('star');
            else
                $(`.rate-group__item#${i}`).children().text('star_border');
        }

    $('.rate-group').attr('data-rate',rate);
})


