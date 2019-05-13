$('.checkbox-btn__checkbox').change(function() {

    if($(this).prop('checked'))
        $('.checkbox-btn__checkmark').attr('viewBox','0 0 10 11');
    else
    $('.checkbox-btn__checkmark').attr('viewBox','0 0 0 0');

});