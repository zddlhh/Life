(function(){
	$(document).ready(function(){
		var points = new Array();
		
		var Point = function(){
				
		};
		Point.prototype.X = 0;
		Point.prototype.Y = 0;
		function init(){
			var containerWidth = document.body.clientWidth;
			var containerHeight = document.body.clientHeight;
			var divMain = $('divMain');
			//divMain.width(containerWidth);
			//divMain.height(containerHeight);
			
			//alert(containerWidth);
			//alert(containerHeight);
			
			var cvs = $("#cvsMain");
			//cvs.width(containerWidth);
			//cvs.height(containerHeight);
			
			var width = Math.floor(cvs.width()); //.css("width");
			var height = Math.floor(cvs.height());//.css("height");
			
			var widthCount = 12;
			var heightCount = 80;
			
			var total = widthCount * heightCount;
			var perWidth = Math.floor(width / widthCount);
			var perHeight = Math.floor(height / heightCount);
			var ctx = cvs[0].getContext("2d");
			ctx.strokeStyle = "red";
			
			for(var i = 0; i < heightCount; i++){
				ctx.save();
				ctx.translate(0.5, 0.5);
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(0, perHeight * i);
				console.log(perHeight * i);
				ctx.lineTo(width, perHeight * i);
				ctx.closePath();
				ctx.stroke();
				ctx.restore();
			}
			
			for(var j = 0; j < widthCount; j++) {
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(perWidth * j, 0);
				console.log(perWidth * j);
				ctx.lineTo(perWidth * j, height);
				ctx.closePath();
				ctx.stroke();
			}
		}
		
		init();

	});
})();
