

var map = L.map('map').setView([52.4, -1.5], 7);

/*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/
var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// side bar
/*        var sidebar = L.control.sidebar('sidebar', {
            closeButton: true,
            position: 'left'
        });
map.addControl(sidebar);

        setTimeout(function () {
            sidebar.hide();
        }, 500);

        var marker = L.marker([52.4, -1.5]).addTo(map).on('click', function () {
            sidebar.toggle();
        });

        map.on('click', function () {
            sidebar.hide();
        })

        sidebar.on('show', function () {
            console.log('Sidebar will be visible.');
        });

        sidebar.on('shown', function () {
            console.log('Sidebar is visible.');
        });

        sidebar.on('hide', function () {
            console.log('Sidebar will be hidden.');
        });

        sidebar.on('hidden', function () {
            console.log('Sidebar is hidden.');
        });

        L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
            console.log('Close button clicked.');
        });*/
        // end side bar


//  add markers
/*
    var marker = L.marker([51.5, -0.09]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    var marker1 = L.marker([51.6, -0.09]).addTo(map);

    marker1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    var popup = L.popup()
    .setLatLng([51.5, -0.08])
    .setContent("I am a standalone popup.")
    .openOn(map);
*/

	// on-click for entire map
/*	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	}

	map.on('click', onMapClick);*/


        // json pass-in
        // var map = new L.LayerGroup();
        // L.geoJson(stores, {style:myStyle}).addTo(map);
    // specify popup options 

    

	L.geoJSON(stores, {
	    style: function(feature) {
	        switch (feature.properties.category) {
	            case 'patisserie': return {color: "#ff0000"};
	            case 'cafe':   return {color: "#0000ff"};
	        }
	    }
	}).addTo(map);


	// popup message
	function onEachFeature(feature, layer) {
	    if (feature.properties && feature.properties.description) {
	    /*	content = 'category: '+feature.properties.category +'</br>'+
	    	'hours: '+ feature.properties.hours +'</br>'+
	    	'description: '+feature.properties.description +'</br>'+
	    	'name: ' +feature.properties.name + '</br>'+
	    	'phone: '+ feature.properties.phone +'</br>'+
	    	'storeid: '+ feature.properties.storeid + '</br>';*/
	    var customOptions =
        {
        'maxWidth': '500'
        };
	    var content1 =L.Util.template(
				'<table class="table">\
				  <thead>\
				    <tr>\
				      <th scope="col">Name</th>\
				      <th scope="col">{name}</th>\
				    </tr>\
				  </thead>\
				  <tbody>\
				    <tr>\
				      <th scope="row">category</th>\
				      <td>{category}</td>\
				    </tr>\
				    <tr>\
				      <th scope="row">description</th>\
				      <td>{description}</td>\
				    </tr>\
				    <tr>\
				      <th scope="row">hours</th>\
				      <td>{hours}</td>\
				    </tr>\
				  </tbody>\
				</table>', feature.properties);
  
		var popup = L.popup()
	    .setContent(content1);
	        layer.bindPopup(popup, customOptions);
	    }
	}
		L.geoJSON(stores, {
	    onEachFeature: onEachFeature
	}).addTo(map);

	// end of popup message 


// var popup = L.popup()
//     .setContent("I am a standalone popup.");
// var marker = L.marker([51.5, -0.09]).addTo(map);
// marker.bindPopup(popup);
	

	// var popup = L.popup()
 //    .setLatLng(latlng)
 //    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
 //    .openOn(map);

// for(var i in stores.features)
// 	{
// 		for(var j in i)
// 		{
// 			for(var k in stores.features[j].properties)
// 				{ 
// 					console.log(k); 
// 				}
// 		}
// 	}



    //  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 

    //  add base map tiles from OpenStreetMap and attribution info to 'map' div

    // create custom icon

    // create popup contents
    // var customPopup = "Mozilla Toronto Offices<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='350px'/>";
    


    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    // L.marker([43.64701, -79.39425], {icon: firefoxIcon}).bindPopup(customPopup,customOptions).addTo(map);
    