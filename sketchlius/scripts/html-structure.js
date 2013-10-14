console.log('build html');
define(['jquery','anim'], function($,anim){
	var strut;
	return {
		buildUp: function(conteudo){
			var c = conteudo
			cLeng = c.length;
			;
			strut = $("<ul/>",{'id':'images', 'class':'images SimpleBanner'});

			for(var i =0; i<cLeng; i++){
				var li = $("<li/>");
				li.html(c[i]);
			 	strut.append(li);
			}

			this.insertConteudo(strut);
		}

		,insertConteudo: function(conteudo){
			var c = conteudo
			 	;
			
			anim.setExposicao();
			$('body').empty().html(c);
			this.imageIndex();
			this.showTimer();
			anim.init();
		}

		,imageIndex: function(){
			var li = strut.children('li')
				,i
				,l= li.length
				;

			for(i=0; i<l;i++){
				var a = (l - i)-1;
				console.log(li[i])
				$(li[i]).css('z-index',a);
			}
		}

		,showTimer: function(){
			if($('.totalTime').length == 0){
				var totTimer = $('<div/>', {'class':'totalTime'})
					,curr= $('<div/>', {'class':'currentTime'})
					;
				totTimer.html(curr);
				$('body').prepend(totTimer);
			}

		}

	}
});