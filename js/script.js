$(document).ready(function(){	

	var skycons = new Skycons({
		color: "#fff",
		resizeClear:true
	});

	var koordinaten;

	navigator.geolocation.getCurrentPosition(function(position) {
		// console.log(position);

		koordinaten = {
		longitude: 	position.coords.longitude,
		latitude: 	position.coords.latitude
	};
			
		// Forcast
		// API-Key: f5d8630e1c9fdb9adf845910a7d5e4fd
		$.ajax({
			url: 'https://api.forecast.io/forecast/a955df0e9afe8c822ebb3adf30265fb6/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data: {
				units: 'si',
				lang: 'de'
			},
			
			// Damit wir mit JavaScript Daten von einem externen Webserver laden können
			// JSONP packt Anfrage in eine Methode
			dataType: 'jsonp'
		}).done(function(data){
			// console.log(data);

			// Anzeige Icon, Temperaturen und Summary
			skycons.add($('.js-icon')[0], data.currently.icon);
			$('.temperature').text(data.currently.temperature + ' °C');
			$('.summary').text(data.currently.summary);
			
			skycons.add($('.js-icon_1')[0], data.daily.data[0].icon);
			$('.temperature_1').text(data.daily.data[0].temperatureMin + ' °C / ' + data.daily.data[0].temperatureMax+ ' °C');
			$('.summary_1').text(data.daily.data[0].summary);

			skycons.add($('.js-icon_2')[0], data.daily.data[1].icon);
			$('.temperature_2').text(data.daily.data[1].temperatureMin + ' °C / ' + data.daily.data[1].temperatureMax+ ' °C');
			$('.summary_2').text(data.daily.data[1].summary);

			skycons.add($('.js-icon_3')[0], data.daily.data[2].icon);
			$('.temperature_3').text(data.daily.data[2].temperatureMin + ' °C / ' + data.daily.data[2].temperatureMax+ ' °C');
			$('.summary_3').text(data.daily.data[2].summary);

			skycons.add($('.js-icon_4')[0], data.daily.data[3].icon);
			$('.temperature_4').text(data.daily.data[3].temperatureMin + ' °C / ' + data.daily.data[3].temperatureMax+ ' °C');
			$('.summary_4').text(data.daily.data[3].summary);

			skycons.add($('.js-icon_5')[0], data.daily.data[4].icon);
			$('.temperature_5').text(data.daily.data[4].temperatureMin + ' °C / ' + data.daily.data[4].temperatureMax+ ' °C');
			$('.summary_5').text(data.daily.data[4].summary);

			skycons.play();						
    	});

			// Anzeige der Koordinaten
				// $('.longitude').text(position.coords.longitude);
				// $('.latitude').text(position.coords.latitude);
				// $('.accuracy').text(position.coords.accuracy);

			// Google Geocoding Anfrage
			// mein Google API-Code: AIzaSyAcTuBQBKhiEXs3S4TZ0Pr1EzdqCSCMxig
			// Crossrequest erlaubt
			$.ajax({
				url: 'https://maps.googleapis.com/maps/api/geocode/json',
				data: {
					latlng: koordinaten.latitude + ',' + koordinaten.longitude,
					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
					language: 'de'
				}
			}).done(function(data) {
				// console.log(data);

				// Anzeige der Adresse
				$('.address').text(data.results[0].formatted_address);
			});
		});
	});

	$(document).on('pageshow', '#map', function() {
		console.log(koordinaten);
		drawMap(new google.maps.LatLng(koordinaten.latitude, koordinaten.longitude));
	});

	function drawMap(latlng) {
		var myOptions = {
			zoom: 10,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map($('.map-canvas')[0], myOptions);

		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
	}
//});


	/*
	console.log($('.js-icon'));
	console.log($('.js-icon')[0]);

	skycons.add($('.js-icon')[0], Skycons.RAIN);
		
	setTimeout(function(){
		skycons.set($('.js-icon')[0], Skycons.PARTLY_CLOUDY_DAY);
		},
		5000);
	*/