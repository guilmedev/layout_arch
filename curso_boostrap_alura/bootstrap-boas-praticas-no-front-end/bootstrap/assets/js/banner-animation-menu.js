//No evento show do menu ...
//Muda a posição do banner
$('#navbar-collapse').on("shown.bs.collapse", function(){
    $('.banner').css('transform', 'translate(-50%, 10%)');
});

//No evento de hide "voltar"
//Volta a posição original
$('#navbar-collapse').on("hide.bs.collapse", function(){
    $('.banner').css('transform', 'translate(-50%, -50%)');
});