$('.rate-group__item').click(function(e){
    
    if($(`.rate-group__item#${this.id}`).children('i').text()=='star_border')
        for(var i=1; i<=this.id;i++)
            $(`.rate-group__item#${i}`).children('i').text('star')
    else
        for(var i=5; i>this.id;i--)
            $(`.rate-group__item#${i}`).children('i').text('star_border')
});