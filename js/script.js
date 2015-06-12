$(document).ready(function(){		
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);

		var koordinaten = {
			longitude: 	 position.coords.longitude,
			latitude: 	 position.coords.latitude
		};
		
		// Anzeige der Koordinaten
		//$('.longitude').text(position.coords.longitude);
		//$('.latitude').text(position.coords.latitude);
		//$('.accuracy').text(position.coords.accuracy);
		
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

			// Anzeige der Temperatur
			$('.apparentTemperature').text(data.currently.apparentTemperature+ ' °C');
			$('.summary').text(data.currently.summary);

			//Google Geocoding Anfrage
			// mein Google API-Code: AIzaSyAcTuBQBKhiEXs3S4TZ0Pr1EzdqCSCMxig
			// Crossrequest erlaubt
			$.ajax({
				url:'https://maps.googleapis.com/maps/api/geocode/json',
				data:{
					latlng: koordinaten.latitude + ',' + koordinaten.longitude,
					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
					language: 'de'
				},
			}).done(function(data){
				console.log(data);

				// Anzeige der Temperatur
				$('.address').text(data.results[0].formatted_address);

			});
		});
	});
});


