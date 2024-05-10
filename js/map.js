
var map = L.map('map').setView([20.5937, 78.9629], 5); // Set initial coordinates to India and zoom level

    // Add a base map layer (you can use different tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create a marker cluster group
    var markers = L.markerClusterGroup();

    // Function to add markers for nearby restaurants
    function addNearbyRestaurants(latitude, longitude) {
      // Simulate fetching nearby restaurants (replace with actual data)
      var nearbyRestaurants = [
        { name: 'Restaurant 1', latlng: [latitude + 0.01, longitude + 0.01], info: 'Restaurant 1 Info' },
        { name: 'Restaurant 2', latlng: [latitude + 0.02, longitude + 0.02], info: 'Restaurant 2 Info' },
        { name: 'Restaurant 3', latlng: [latitude - 0.01, longitude - 0.01], info: 'Restaurant 3 Info' },
        { name: 'Restaurant 4', latlng: [latitude + 0.03, longitude + 0.03], info: 'Restaurant 4 Info' },
        { name: 'Restaurant 5', latlng: [latitude - 0.02, longitude - 0.02], info: 'Restaurant 5 Info' },
        { name: 'Restaurant 6', latlng: [latitude + 0.02, longitude - 0.01], info: 'Restaurant 6 Info' },
        { name: 'Restaurant 7', latlng: [latitude - 0.01, longitude + 0.02], info: 'Restaurant 7 Info' },
        { name: 'Restaurant 8', latlng: [latitude - 0.02, longitude + 0.01], info: 'Restaurant 8 Info' },
        { name: 'Restaurant 9', latlng: [latitude + 0.01, longitude - 0.02], info: 'Restaurant 9 Info' },
        { name: 'Restaurant 10', latlng: [latitude - 0.03, longitude + 0.03], info: 'Restaurant 10 Info' }
      ];

      // Clear existing markers
      markers.clearLayers();

      // Add markers for each nearby restaurant
      nearbyRestaurants.forEach(function(restaurant) {
        var marker = L.marker(restaurant.latlng).addTo(markers);
        marker.bindPopup('<b>' + restaurant.name + '</b><br>' + restaurant.info);
      });

      // Add marker cluster group to the map
      map.addLayer(markers);

      // Zoom in to the location of the found restaurants
      map.setView([latitude, longitude], 13); // Zoom level 13
    }

    // Submit handler for the location form
    document.getElementById('locationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var address = document.getElementById('address').value;

      // Use the address to fetch coordinates (replace with actual geocoding)
      var latitude = 20.5937; // Example latitude
      var longitude = 78.9629; // Example longitude

      // Clear previous results
      document.getElementById('restaurants').innerHTML = '';

      // Add nearby restaurants to the map
      addNearbyRestaurants(latitude, longitude);
    });