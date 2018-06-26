var url = "http://localhost:8080/Droneseta/webresources/produtos/";

$(function() {
    $('#cadastrar').click(function() {
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
    $.ajax({
           url: url,
           type: 'POST',
           contentType: 'application/json',
           data: JSON.stringify(data),
           success: function() {
               alert('Produto cadastrado com sucesso!');
           },
           error : function() {
               //alert(arguments);
           }
       });
}