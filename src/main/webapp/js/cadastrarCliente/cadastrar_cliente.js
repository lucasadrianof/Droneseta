/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var url = "http://localhost:36892/Droneseta/webresources/usuarios/";

$(function () {
    $("#cadastrar").click(function () {
        submit();
    });
});

function submit() {
    var data = {
        cpf: $('#inputCpf').val(),
        nome: $('#inputNome').val(),
        senha: $('#inputSenha').val(),
        numeroCartao: $('#inputCartao').val(),

        endereco: {

            rua: $('#inputRua').val(),
            numero: $('#inputNumero').val(),
            complemento: $('#inputComplemento').val(),
            bairro: $('#inputBairro').val(),
            cidade: $('#inputCidade').val()

        },

        enderecoEntrega: {

            rua: $('#inputRuaEntrega').val(),
            numero: $('#inputNumeroEntrega').val(),
            complemento: $('#inputComplementoEntrega').val(),
            bairro: $('#inputBairroEntrega').val(),
            cidade: $('#inputCidadeEntrega').val()

        }

    };
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function () {
            alert('Usuario cadastrado com sucesso!');
        },
        error: function () {
            //alert(arguments);
        }
    });
}


//        rua : $('#inputRua').val(),
//        numero : $('#inputNumero').val(),
//        complemento : $('#inputComplemento').val(),
//        bairro : $('#inputBairro').val(),
//        cidade : $('#inputCidade').val(),
//        
//      