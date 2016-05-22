// Adiciona padding ao body (para dar espaço a DIV fiixada no footer)
var divHeight = $('.mv-fixed-bottom').height();
$('body').css('padding-bottom', divHeight + 'px');

$(window).on('resize', function () {
    var divHeight = $('.mv-fixed-bottom').height();
    $('body').css('padding-bottom', divHeight + 'px');
});


// Faz a treeview de histórico funcionar
$('.treeview li:has(ul)').find(' > .tree-has-sub').attr('title', 'Fechar grupo');
$('.treeview .parent_li > .tree-has-sub').parent('.parent_li').find(' > .list-treeview').hide();
$('.treeview .parent_li > .tree-has-sub').on('click', function (e) {
    var children = $(this).parent('.parent_li').find(' > .list-treeview');
    if (children.is(":visible")) {
        children.hide('fast');
        $(this).attr('title', 'Abrir grupo').find(' > .glyphicon').addClass('glyphicon-chevron-right').removeClass('glyphicon-chevron-down');
    } else {
        children.show('fast');
        $(this).attr('title', 'Fechar grupo').find(' > .glyphicon').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-right');
    }
    e.stopPropagation();
});
// inicia a treeview
$('.treeview').treeView();
