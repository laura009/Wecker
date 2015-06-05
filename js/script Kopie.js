$(document).ready(function(){
	/*$.ajax({
		dataType:'jsonp',
		url:'https://api.forecast.io/forecast/f5d8630e1c9fdb9adf845910a7d5e4fd/47.379022,%208.541001?callback=?&units=si'
			//API-Key sollte nicht hier stehen (Klau) -> Spezieller Dienst verwenden!
			//Koordinaten
			//?callback=?: JSON packt Code in eine Funktion und sendet diese (im JS darf man nicht Code von einem anderen Server laden)

	}).done(function(data){*/
		
		navigator.geolocation.getCurrentPosition(function(position){
			console.log(position);
		});

		var $h1	= $('h1');
		$h1.text(data.currently.apparentTemperature+ ' °C');

		var $p = $('p');
		$p.text(data.flags['metno-license']);	//wegen Divis: Punkt weglassen plus [''] 

		console.log(data);
	});
});