;(function($){


	$.fn.pluginTeste = function(parametros) {

		$(this).on("click", ".close", function(){
			//este this de dentro é o .close
			//elemento que está sofrendo o click
			var $objMensagem = $(this).parent();
			$objMensagem.hide(1000);
			setTimeout(function(){
				$objMensagem.remove();
			}, 1100);
				
		});

		var horaArray = parametros.inicio.split(":");
		var inicio = (horaArray[0]-8)*60 + parseInt(horaArray[1]);

		var msg = parametros.mensagem;
		
		$(this).find(".calendar-grid")
			.append($("<div />")
				.addClass("event")
				.text(parametros.evento)
				.css("height", parametros.duracao)
				.css("top", inicio)
				.append($("<div />").addClass("close")
							.html("&times;"))
			)	
	};
})(jQuery);






