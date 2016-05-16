// Adiciona padding ao body (para dar espaço a DIV fiixada no footer)
var divHeight = $('.mv-fixed-bottom').height();
$('body').css('padding-bottom', divHeight + 'px');

$(window).on('resize', function () {
    var divHeight = $('.mv-fixed-bottom').height();
    $('body').css('padding-bottom', divHeight + 'px');
});