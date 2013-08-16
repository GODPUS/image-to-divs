$(window).load(function() {
	$(".image-to-div").each(function(index){
		var pixelSize = 5;
		var img = $(this).find(".small")[0];
		var canvas = $("#canvas")[0];
		canvas.width = img.width;
		canvas.height = img.height;
		canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

		var $largeImg = $(this).find(".large");
		var $container = $("<div>", {id: "container-"+index, class: "container"}).appendTo($("#main-container"));

		$container.click(function(){
			var $this = $(this);

			if($this.hasClass('open'))
			{
				$this.css({ width: "100%" }).removeClass('open');
			}else{
				$this.css({ width: img.width*pixelSize+"px" }).addClass('open');
			}
		});

		for(y = 0; y < img.height; y++)
		{
			for(x = 0; x < img.width; x++)
			{
				var pixelData = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
				var $pixelDiv = $("<div>", {class: "pixel", style: "width: "+pixelSize+"px; height: "+pixelSize+"px; background-color: rgba("+pixelData[0]+", "+pixelData[1]+", "+pixelData[2]+", 1);"});
				$pixelDiv.appendTo($container);
			}
		}

		$largeImg.prependTo($container);

	});
});