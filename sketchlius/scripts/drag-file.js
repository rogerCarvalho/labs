console.log('drag-file.js');
define(['jquery','structure'], function($, structure){

	return {
		init: function(){
			var drop = $('body');
			// Check for the various File API support.
			if (window.File && window.FileReader && window.FileList && window.Blob) {
			  // Great success! All the File APIs are supported.
				drop.on('dragover', function(e){
					e.stopPropagation();
					e.preventDefault();
				});
				var ibagens = new Array();

				drop.on('drop', function(e){
					
					e.stopPropagation();
					e.preventDefault();
					
					var files = e.originalEvent.dataTransfer.files;

					for(var i = 0; i <files.length; i++){
						reader = new FileReader();
						reader.onload = function(evt){
							var imgsrc = evt.target.result
								;
							var ibagem = $('<img>',{ 'src':imgsrc});
							ibagens.push(ibagem);
						}
						reader.readAsDataURL(files[i]);
					}

					reader.onloadend = function (e){
						structure.buildUp(ibagens)
					}

				});
			} else {
			  alert('The File APIs are not fully supported in this browser.');
			}
		}
	}
}
);