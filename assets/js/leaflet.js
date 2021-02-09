//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values
var map = L.map("map").setView([53.4, -1.9], 6);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
var OpenStreetMap_DE = L.tileLayer(
  "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
  {
	maxZoom: 18,
	attribution:
	  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// json pass-in and add markers
L.geoJSON(stores, {
  style: function (feature) {
	switch (feature.properties.category) {
	  case "patisserie":
		return { color: "#ff0000" };
	  case "cafe":
		return { color: "#0000ff" };
	}
  },
}).addTo(map);

// popup message
function onEachFeature(feature, layer) {
  if (feature.properties) {
	var customOptions = {
	  maxWidth: "500",
	};
	// create popup contents using table
	var content = L.Util.template(
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
				</table>',
	  feature.properties
	);
	// create popup object, pass custom icon as option, pass content and options to popup
	var popup = L.popup().setContent(content);
	layer.bindPopup(popup, customOptions);
  }
}
// call function onEachFeature and add to map
L.geoJSON(stores, {
  onEachFeature: onEachFeature,
}).addTo(map);

// end of popup message

/* To-try 
// create custom icon 
*/
