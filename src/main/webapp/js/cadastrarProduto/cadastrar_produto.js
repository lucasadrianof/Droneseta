var url = "http://localhost:8080/droneseta/webresources/produtos/";

$(function() {
    $('#cadastrar').click(function() {
        alert('bindou o click');
        submit();
    });
});
function submit() {
    var data = {
        descricao : $('#inputDescricao').val(),
        tamanho : $('#inputTamanho').val(),
        preco : $('#inputPreco').val(),
        quantidade : $('#inputQtdade').val(),
        urlImagem : $('inputUrl').val()
    };
    debugger;
    $.ajax({
           url: url,
           type: 'POST',
           contentType: 'application/json',
           data: JSON.stringify(data),
           success: function(data) {
               console.log('deu boa cachoeira');
           },
           error : function() {
               alert(arguments);
           }
       });
}