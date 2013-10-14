define(function() {


	var animationID;
	var graphicCurrTime;
	var Duracao;

	return{
		startTime: function(obj, time){
			console.log('aqui');
			graphicCurrTime = obj;
			Duracao = time;
			this.resetAndStart();
		}

		, resetAndStart: function(){
			graphicCurrTime.animate({'width':0+'px'}, 0);
			this.loop();
		}	

		, loop: function(){
			var larg = graphicCurrTime.parent().width();
			graphicCurrTime.animate({'width':larg+'px'}, Duracao);
		}

		, resetTimer: function(){

		}
	}
});