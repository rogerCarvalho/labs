console.log('simpleBanner');

define(['jquery', 'tTimer'], function($, tTimer){
 return {
 		timer: null,
 		timeO: 2000,
 		exposicao: $('.setTime').text()*1000,

 		init : function(){
 			console.log(this.exposicao);
 			var obj = this;
 			this.ul = $('.SimpleBanner');
 			this.li = this.ul.children('li');
 			this.leng = this.li.length;
 			this.config();
 			//this.navLinks();
 			this.timer = setTimeout(function(){obj.animate();}, this.exposicao);
 			//this.startLinks();
 			tTimer.startTime( $('.currentTime'), this.exposicao);
 		},

 		config: function(){
 			var leng = this.li.length;
 			this.li.each(function(i){
 				$(this).css({
 					'position':'absolute'
 					,'top': '0'
 					,'left': '0'
 					,'z-index': leng-i
 					, 'display':'none'
 					});
 			});
 			$(this.li[0]).css('display', 'block');
 		},

 		setExposicao: function(){
 			this.exposicao = $('.setTime').text()*1000;
 		},

 		animate : function(t){
 			clearInterval(this.timer);
 			var obj = this;
 			var inn 
 				, out = this.getVisible()
 				, outI = out.i
 				, timeO = this.timeO;
 				;
 			out = out.ob;
 			t = t || this.setLimits(outI);
 			inn = $(this.li[t]);
 			if(t != null){
	 			obj.selectLink(t);
	 			out.fadeOut(timeO/2, function(){
	 				//tTimer.resetAndStart();
	 			});

	 			inn.fadeIn(timeO, function(){
	 				tTimer.resetAndStart();
	 				obj.timer = setTimeout(function(){obj.animate();}, obj.exposicao);
	 			});
 			}
 		},

 		stopAnimate: function(){
 			clearInterval(this.timer);
 			this.timer ='';
 		},

 		getVisible : function(){
 			var ri;
 			this.li.each( function(i){
 				var s = $(this);
 				if(s.css('display') != 'none'){
 						ri = i;
 						return false;
 					}
 			});

 			return { ob: $(this.li[ri]), i:ri}
 		},

 		setLimits: function(num){
 			num = num + 1;		
 			return num >= this.leng ?
 				null :
 				num;
 		},

 		navLinks : function(){
 			var listaDeLinks
 				, leng = this.leng
 				;
 			listaDeLinks = "<ul class='SimpleBannerNav'>";
 			for(var i = 0; i < leng; i++){
 				listaDeLinks +='<li><a href="#">'+i+'</a></li>';
 			}
 			listaDeLinks += '</ul>';
			
 			$('body').prepend(listaDeLinks);

 			$('.SimpleBannerNav').css({
 				'position':'absolute',
 				'bottom':'10px',
 				'left':'10px',
 				'z-index':'999'
 			});

 			$('.SimpleBannerNav li').css({
 				'float':'left',
 				'background':'#fff',
 				'border-radius':'50%',
 				'width':'13px',
 				'height':'13px',
 				'margin-left':'5px'
 			});

 			$('.SimpleBannerNav a').css({
 				'display':'block',
 				'font-size':'1px',
 				'text-indent':'-100%',
 				'overflow':'hidden',
 				'width':'7px',
 				'height':'7px',
 				'margin':'3px',
 				'border-radius':'50%'
 			});

 			this.selectLink(0);
 		},

 		selectLink: function(d){
 			$('.SimpleBannerNav a').removeClass('selected').eq(d).addClass('selected');
 		},

 		startLinks: function(){
 			var obj = this;
 			$('.SimpleBannerNav a').click(function(e){
 				console.log(e.target);
 				e.preventDefault();
 				obj.animate($(this).parent().index());

 			});
 		}
 	}
});