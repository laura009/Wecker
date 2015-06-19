$(document).ready(function(){	

	var skycons = new Skycons({
			color: "#fff",
			resizeClear:true
		});

	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);

		var koordinaten = {
			longitude: 	 position.coords.longitude,
			latitude: 	 position.coords.latitude
		};		
			
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

			// Anzeige Icon und Summary
			skycons.add($('.js-icon')[0], data.currently.icon);
			skycons.play();

			$('.summary').text(data.currently.summary);

			// Anzeige der Temperatur
			$('.apparentTemperature').text(data.currently.apparentTemperature+ ' °C');

			// Anzeige der Koordinaten
				$('.longitude').text(position.coords.longitude);
				$('.latitude').text(position.coords.latitude);
				$('.accuracy').text(position.coords.accuracy);

			// Google Geocoding Anfrage
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

				// Anzeige der Adresse
				$('.address').text(data.results[0].formatted_address);
			});
		});
	});
	
	/*
	console.log($('.js-icon'));
	console.log($('.js-icon')[0]);

	skycons.add($('.js-icon')[0], Skycons.RAIN);
	
	
	setTimeout(function(){
		skycons.set($('.js-icon')[0], Skycons.PARTLY_CLOUDY_DAY);
		},
		5000);
	*/

});