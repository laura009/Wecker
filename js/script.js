$(document).ready(function(){		
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);

		$('.longitude').text(position.coords.longitude);

		var $h1	= $('h1');
		$h1.text(data.currently.apparentTemperature+ ' °C');

		var $p = $('p');
		$p.text(data.flags['metno-license']);	//wegen Divis: Punkt weglassen plus [''] 

	});
});