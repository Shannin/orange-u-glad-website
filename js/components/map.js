var dispensaries = [
    {
        name: 'Sparc',
        address: {
            street: '1256 Mission St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94103',
        },
        location: {lat: 37.7768998, lng: -122.41421489},
        phone: '415-252-7727',
        logo: 'sparc.jpg',
        website: 'http://www.sparcsf.org',
    },
    {
        name: 'Berkeley Patients Group',
        address: {
            street: '2366 San Pablo Ave',
            city: 'Berkeley',
            state: 'CA',
            zip: '94702',
        },
        location: {lat: 37.863273, lng: -122.290610},
        phone: '510-540-6013',
        logo: 'bpg.png',
        website: 'http://www.mybpg.com',
    },
];

// this is shitty.
function initMap() {
    (function($) {
        var center;
        var currentInfoWindow;
        var locationsMap = $('#locations-map');

        $(locationsMap).on('click', '.dispensary-card__close-button', function (event) {
            if (currentInfoWindow != null) {
                currentInfoWindow.close();
            }

            $('.locations-map__map-box', locationsMap).removeClass('hidden');
            $('.locations-map__dispensary-card-container', locationsMap).addClass('hidden');
        });

        function init () {
            var map = new google.maps.Map(document.getElementById('google-maps-box'), {
                center: {lat: 37.7396515, lng: -122.2921592},
                zoom: 11,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
            });

            google.maps.event.addDomListener(map, 'idle', function() {
                center = map.getCenter();
            });

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(center);
            });

            // Add markers
            var img = 'img/orange.png';
            var size = new google.maps.Size(25,25);
            var icon = new google.maps.MarkerImage(img, null, null, null, size);

            var markers = dispensaries.map(function(dispensary) {
                var marker = new google.maps.Marker({
                    position: dispensary.location,
                    map: map,
                    icon: icon
                });

                setMarkerClickEvent(map, marker, dispensary);

                return marker;
            });

            zoomToAllMarkers(map, markers);

            map.setOptions({draggable: !screenSizeMobile()});

            $(window).on('resize', function() {
                map.setOptions({draggable: !screenSizeMobile()});
            });
        }

        function setMarkerClickEvent(map, marker, dispensary) {
            marker.addListener('click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                var dispensaryCardContent = generateDispensaryCardContent(dispensary);

                if (screenSizeMobile()) {
                    (function($) {
                        var locationsMap = $('#locations-map');

                        $('.locations-map__map-box', locationsMap).addClass('hidden');
                        $('.locations-map__dispensary-card-container', locationsMap).removeClass('hidden');
                        $('.locations-map__dispensary-card-container', locationsMap).html(dispensaryCardContent);
                    })(jQuery);
                } else {
                    var infowindow = new google.maps.InfoWindow({
                        content: dispensaryCardContent
                    });
                    infowindow.open(map, marker);

                    currentInfoWindow = infowindow;
                }
            });
        }

        function generateDispensaryCardContent(dispensary) {
            return  '<div class="locations-map__dispensary-card">' +
                        '<img src="img/dispensaries/' + dispensary.logo + '" />' +
                        '<h5 class="font--sans-serif">' + dispensary.name + '</h5>' +
                        '<div class="font--sans-serif dispensary-card__body">' +
                            '<div class="dispensary-card__body__row no-space"><span>Address</span>' + dispensary.address.street + '</div>' +
                            '<div class="dispensary-card__body__row no-space"><span></span>' + dispensary.address.city + ', ' + dispensary.address.state + ' ' + dispensary.address.zip + '</div>' +
                            '<div class="dispensary-card__body__row"><span></span><a href="' + generateDispensaryDirectionsLink(dispensary) + '" target="_blank">Directions</a></div>' +
                            '<div class="dispensary-card__body__row"><span>Phone</span>' + dispensary.phone + '</div>' +
                            '<div class="dispensary-card__body__row"><span></span><a href="' + dispensary.website + '" target="_blank">Website</a></div>' +
                        '</div>' +
                        '<button class="dispensary-card__close-button btn btn-default">Close</button>'
                    '</div>';
        }

        function generateDispensaryDirectionsLink(dispensary) {
            var base = 'https://maps.google.com?saddr=Current+Location&daddr=';
            var parts = [dispensary.address.street, dispensary.address.state, dispensary.address.zip];
            return base + encodeURIComponent(parts.join(" "));
        }

        function screenSizeMobile() {
            return locationsMap.width() <= 600 || locationsMap.height() <= 600;
        }

        function zoomToAllMarkers(map, markers) {
            var bounds = new google.maps.LatLngBounds();
            markers.forEach(function(m) {
                bounds.extend(m.getPosition());
            });

            map.fitBounds(bounds);
        }
        

        init();
    })(jQuery);
}