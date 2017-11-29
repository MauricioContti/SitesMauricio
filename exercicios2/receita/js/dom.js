$(function(){

  var servico = "http://botanicapp.com.br/receitas_teste.php";

  $.get(servico).done(function(data){
    var receitasArray = JSON.parse(data);

    $.each(receitasArray, function(index, receita){
      var $ol= $("<ol />");
      var $ul= $("<ol />");
        $.each(receita.preparo, function(index, obj){
                $ol.append($("<li />").text(obj));
              });
        $.each(receita.ingredientes, function(index, obj){
                $ul.append($("<li />").text(obj));
        })

              $(".receitas")
                    .append($("<div/> ").addClass("receitas2")
                    .append($("<div/> ").addClass("cima")
                    .append($("<img />").attr("src",receita.foto))
                    .append($("<h1 />").text(receita.nome))
                    .append($("<h3 />").text("Descrição: "))
                    .append($("<p />").text(receita.descricao)))
                    .append($("<div/> ").addClass("baixo")
                    .append($("<div/> ").addClass("esquerda")
                    .append($("<h3 />").text("Ingredientes: "))
                    .append($ul))
                    .append($("<div/> ").addClass("direita")
                    .append($("<h3 />").text("Preparo: "))
                    .append($ol))))



                  });

            });
    })
