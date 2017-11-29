$(function(){
  var lista= "http://botanicapp.com.br/filmes.php";
    $.get(lista).done(function(data){
      console.log(data);
      var filmes = JSON.parse(data);
      $.each(filmes, function(index, obj){
      var $ol= $("<ol/>");
      var $ele = $("<ele/>");
      var $gen = $("<gen/>");
      var $op = $("<op/>");
          $.each(obj.titulosSemelhantes, function(index, filmeSemelhanteID){
            $.each(filmes, function(index, filme){
                if(filmeSemelhanteID==filme.id)
                $ol.append($("<li/>").text(filme.titulo));
              })
          });

          $.each(obj.elenco, function(index, obj){
            $ele.append($("<li/>").text(obj));
          });

          $.each(obj.generos, function(index, obj){
            $gen.append($("<li/>").text(obj));
          });

          $.each(obj.opinioes, function() {
            $.each(this, function(index, obj) {
              console.log(index + '=' + obj);
                $op.append($("<p id='nota'/>").text("Nota: " + obj));
            });
          });

                    $("body").append($("<div id='centralizado'/>")
                          .append($("<h6/>").text(obj.id))
                            .append($("<h1/>").text(obj.titulo))
                              .append($("<img id='capaFilme'/>").attr("src",obj.figura))
                                .append($("<h2/>").text("Resumo:"))
                                .append($("<p id='resumo'/>").text(obj.resumo))
                                  .append($("<h2/>").text("Gêneros:"))
                                  .append($gen)
                                    .append($("<h5/>").text("Classificação:" + "" + obj.classificacao))
                                      .append($("<h2/>").text("Elenco:"))
                                      .append($ele)
                                        .append($("<h2/>").text("Titulos semelhantes: "))
                                        .append($ol)
                                          .append($("<p/>").text(obj.descricao))
                                            .append($("<h2/>").text("Opiniões: "))
                                            .append($op)

                          );
                        })
                    });
});
