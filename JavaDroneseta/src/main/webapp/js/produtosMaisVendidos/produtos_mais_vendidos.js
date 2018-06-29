/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var produtos = {};

$(function () {
    popularTabela();
});

var url = "http://localhost:8080/Droneseta/webresources/produtos/disponiveis";

function popularTabela() {

    $.ajax({
        url: url, //Definindo o arquivo onde serão buscados os dados
        type: 'GET', //Definimos o método HTTP usado
        contentType: 'application/json',
        dataType: 'JSON', //Definimos o tipo de retorno
        success: function (data) {

            jQuery.each(data, function (index, value) {

                var trr = '<tr></tr>';
                var tr = trr.createElement("tr");
                var td1 = '<td>' + value.descricao + '</td>';
                var td2 = '<td>' + value.tamanho + '</td>';
                var td3 = '<td>' + value.preco + '</td>';
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);

                $('#tabelaProdutos').append(tr);

            });

        },
        error: function (msg) {
            alert("Não foi possível concluir a requisição");
        }
    });

}