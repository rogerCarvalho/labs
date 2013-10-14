define(['jquery'], function(){
	var iframe = $('.iframe')
		,textArea = $('.drop-area')
		,textoAtual = ''
		,htmlAtual = ''
		;

	return{
		texto: function(){
			htmlAtual = iframe.html();
			textoAtual = textArea.text();
			var partes = isolateTable(textoAtual);
			textArea.text(partes.partOne + htmlAtual + partes.partThree);
		},
		preview: function(){
			textoAtual = textArea.text();
			var partes = isolateTable(textoAtual);
			iframe.replace(partes.partTwo);
		}
	}

	function isolateTable(s){
		s = s.split('table');

		return { 
				partOne : s[0].substr(0, (s[0].length -1))
				,partTwo : '<table' + s[1] + 'table>'
				,partThree : s[2].substr(1)
			}
	}
});