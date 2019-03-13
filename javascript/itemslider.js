$('#prev').on('click', function () {
    var last = $('.poppro').last().css({opacity: '0', width: '0px'});
    last.prependTo('.shoroom');
    last.animate({opacity: '1', width: '350px'});
});
$('#next').on('click', function () {
    var first = $('.poppro').first();
    first.animate({opacity: '0', width: '0px'}, function() {
        first.appendTo('.shoroom').css({opacity: '1', width: '350px'});
    });
});

