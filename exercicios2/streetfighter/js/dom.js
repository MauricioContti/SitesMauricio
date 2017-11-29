$(function(){
  var atalho1, atalho2, atalho3 = null;

    $("#ryu").mouseover(function(){
      $("#ryu").attr("src", "./img/ryu-ginga.gif")
    });

    $("#ryu").mouseleave(function(){
      $("#ryu").attr("src", "./img/ryu.png");
    });

    $("#ryu").click(function(){
      $("#ryu").attr("src", "./img/ryu-magia.png");

      var bolaStr = "<img id='bola' src='./img/bola-fogo.gif' />";
      $(".streetFight").append(bolaStr);
    });

    $("#ryu").click(function(){
      $("#bola").animate({
        right:'-200px',
        opacity:'0.5'
      }, "slow", function(){
        $("#bola").remove();
        });
    });

    $("#ryu").click(function(){
      var audioHadouken = "<audio id=hadouken src='./audio/hadouken.mp3' autoplay='autoplay' />";
      $("#bola").append(audioHadouken);
    })

    $("body").keypress(function(e){
      var tecla = (e.keyCode?e.keyCode:e.which);
      console.log(tecla);
        if(atalho1 == null){
          atalho1=tecla;
        }else if(atalho2 == null){
          atalho2=tecla;
        }else {
          atalho3=tecla;
        }

        if(atalho1||atalho2||atalho3){
          if(atalho1 == 113){
            gancho();
            atalho1=null;
            //atalho2=null;
            //atalho3=null;
          }else if(atalho2 == 97){
            giro();
            //atalho1=null;
            atalho2=null;
           //atalho3=null;
          }else if(atalho3 == 122){
            chute();
            //atalho1=null;
            //atalho2=null;
            atalho3=null;
          }
        }
    })

    function gancho(){
      $("#ryu").attr("src", "./img/ryu-shoryuken.gif").addClass("soco");
        var audioShoryuken = "<audio id=shoryuken src='./audio/ryu-shoryuken.mp3' autoplay='autoplay'/>";
        $("#ryu").append(audioShoryuken);
    }

    function giro(){
      $("#ryu").attr("src", "./img/ryu-tatsumaki-senpuukyaku.gif").addClass("soco");
        var audioTatsumaki = "<audio id=tatsumaki src='./audio/ryu-tatsumaki.mp3' autoplay='autoplay'/>";
        $("#ryu").append(audioTatsumaki);
    }

    function chute(){
      $("#ryu").attr("src", "./img/ryu-mk.gif").addClass("soco");
    }

});
