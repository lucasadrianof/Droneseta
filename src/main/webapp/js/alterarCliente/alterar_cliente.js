/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var url = "http://localhost:36892/Droneseta/webresources/usuarios/";

$(function () {
    $("#procurar").click(function () {
        get();
    });
    
    $("cadastrar").click(function() {
       submit(); 
    });
});

function get() {

    var cpf = $('#inputProcurarCliente').val();
    
    $.ajax({
        url: url + cpf, //Definindo o arquivo onde serão buscados os dados
        type: 'GET', //Definimos o método HTTP usado
        contentType: 'application/json',
        dataType: 'JSON', //Definimos o tipo de retorno
        success: function (data) {
            
            $('#inputNome').val(data.nome);
            $('#inputCpf').val(data.cpf);
            $('#inputCartao').val(data.cartaoCredito);
            $('#inputSenha').val(data.senha);
            
            $('#inputRua').val(data.endereco.rua);
            $('#inputNumero').val(data.endereco.numero);
            $('#inputComplemento').val(data.endereco.complemento);
            $('#inputBairro').val(data.endereco.bairro);
            $('#inputCidade').val(data.endereco.cidade);
            
            $('#inputRuaEntrega').val(data.enderecoEntrega.rua);
            $('#inputNumeroEntrega').val(data.enderecoEntrega.numero);
            $('#inputComplementoEntrega').val(data.enderecoEntrega.complemento);
            $('#inputBairroEntrega').val(data.enderecoEntrega.bairro);
            $('#inputCidadeEntrega').val(data.enderecoEntrega.cidade);
            
        }, 
        error: function(msg) {
            alert("Não foi possível concluir a requisição");
        }
    });
    
}

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


