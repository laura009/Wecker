$(document).ready(function(){		
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);

		var koordinaten = {
			longitude: 	position.coords.longitude,
			latitude: 	position.coords.latitude
		};
		
		// Anzeige der Koordinaten
		//$('.longitude').text(position.coords.longitude);
		//$('.latitude').text(position.coords.latitude);
		//$('.accuracy').text(position.coords.accuracy);
		
		$('.apparentTemperature').text(position.currently.apparentTemperature+ ' °C');


		// API-Key: f5d8630e1c9fdb9adf845910a7d5e4fd
		$.ajax({
			url:'https://api.forecast.io/forecast/f5d8630e1c9fdb9adf845910a7d5e4fd/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data:{
				units: 'si',
				lang: 'de'
			},
			
			// Damit wir mit JavaScript Daten von einem externen Webserver laden können
			// JSONP packt Anfrage in eine Methode
			dataType: 'jsonp'
		}).done(function(data){
			console.log(data);
		});

	});
});