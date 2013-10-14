console.log('main.js');
require.config({
	baseUrl: 'scripts',
	paths: {
		jquery: 'lib/jquery-1.10.2.min'
		,dragFile: 'drag-File'
		,structure: 'html-structure'
		,anim: 'animate-images'
		,tTimer: 'timer-animation'
	}
});
require(['dragFile'], function(dragFile){
	//scriptOne;
	$(document).ready(function(){
			dragFile.init();
		});
});