$(document).ready(function () { 
    $('#add').click(function () {
        var t           = Math.random()*20,
            destination = $('input').val(),
            div         = $('<div />', {'class':'load_bar', 'text': destination});

        $('#holding_pen').append(div);
        div.show(1).delay(t).hide(1).remove();
    });
});