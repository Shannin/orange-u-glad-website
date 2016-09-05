var dispensaries = [
/*    
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
*/
/*
    {
        name: 'Bernal Heights Collective',
        address: {
            street: '33 29th St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94103',
        },
        location: {lat: 37.743839, lng: -122.421660},
        phone: '415-463-7473',
        website: 'http://bernalheightscollective.weebly.com',
    },
*/
    {
        name: 'Blüm Oak',
        address: {
            street: '578 W Grand Ave',
            city: 'Oakland',
            state: 'CA',
            zip: '94612',
        },
        location: {lat: 37.812502, lng: -122.270956},
        phone: '510.338.3632',
        logo: 'blum.png',
        website: 'http://blumoak.com',
    },
    {
        name: 'Cannabis Wellness Center',
        address: {
            street: '2021 Palmetto Ave',
            city: 'Pacifica',
            state: 'CA',
            zip: '94044',
        },
        location: {lat: 37.633629, lng: -122.491880},
        phone: '650-735-5031',
        logo: 'cannabiswellness.png',
        website: 'http://www.thecannabiswellnesscenter.com',
    },
    {
        name: 'Flower Power',
        address: {
            street: '70 2nd Street',
            city: 'San Francisco',
            state: 'CA',
            zip: '94105',
        },
        location: {lat: 37.788252, lng: -122.400471},
        phone: '628-444-3441',
        logo: 'flowerpower.png',
    },
    {
        name: 'Herbal Cruz',
        address: {
            street: '1001 41st Ave',
            city: 'Santa Cruz',
            state: 'CA',
            zip: '95062',
        },
        location: {lat: 36.965865, lng: -121.965386},
        phone: '831-471-8289',
        logo: 'herbalcruz.png',
        website: 'http://www.herbalcruzsantacruz.com/',
    },
    {
        name: 'Highway 29 Health Care',
        address: {
            street: '3737 Sonoma Blvd',
            city: 'Vallejo',
            state: 'CA',
            zip: '94589',
        },
        location: {lat: 38.125609, lng: -122.2559},
        phone: '707-645-8303',
        logo: 'highway29.png',
    },
    {
        name: 'Holistic Healing Collective',
        address: {
            street: '15501 San Pablo Ave',
            city: 'Richmond',
            state: 'CA',
            zip: '94806',
        },
        location: {lat: 37.990006, lng: -122.335593},
        phone: '510-275-3365',
        logo: 'holistichealing.png',
        website: 'http://www.holistichealingcollective.org',
    },
    {
        name: 'HTP Group',
        address: {
            street: '1408 Enterprise St Suite D4',
            city: 'Vallejo',
            state: 'CA',
            zip: '94589',
        },
        location: {lat: 38.135419, lng: -122.258426},
        phone: '707-260-2626',
        logo: 'htpgroup.png',
    },
    {
        name: 'Igzactly 420',
        address: {
            street: '527 Howard Street',
            city: 'San Francisco',
            state: 'CA',
            zip: '94105',
        },
        location: {lat: 37.787834, lng: -122.396539},
        phone: '415-834-5225',
        logo: 'igzactly420.png',
    },
    {
        name: 'Medithrive',
        address: {
            street: '1933 Mission St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94103',
        },
        location: {lat: 37.766169, lng: -122.419424},
        phone: '415-562-6334',
        logo: 'medithrive.png',
        website: 'http://www.medithrive.com',
    },
    {
        name: 'The Cookie Co. 415',
        address: {
            street: '3139 Mission St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94110',
        },
        location: {lat: 37.747016, lng: -122.418717},
        phone: '415-814-2890',
        logo: 'thecookieco.png',
        website: 'http://www.thecookieco415.com/',
    },
    {
        name: 'The Cookie Co. 831',
        address: {
            street: '3711 Soquel Dr',
            city: 'Soquel',
            state: 'CA',
            zip: '95073',
        },
        location: {lat: 36.987826, lng: -121.967465},
        phone: '831-471-8289',
        logo: 'thecookieco.png',
        website: 'http://thecookieco831.com/',
    },
    {
        name: 'Vallejo Holistic Health Center',
        address: {
            street: '539 Tennesee St',
            city: 'Vallejo',
            state: 'CA',
            zip: '94590',
        },
        location: {lat: 38.109687, lng: -122.253393},
        phone: '707-652-5018',
        logo: 'vhhc.png',
        website: 'http://www.vhhc420.org/',
    },
    {
        name: '7 Stars Holistic Healing Center',
        address: {
            street: '3288 Pierce St Suite M108 (Upstairs)',
            city: 'Richmond',
            state: 'CA',
            zip: '94804',
        },
        location: {lat: 37.898754, lng: -122.307853},
        phone: '510-527-7827',
        logo: '7starshhc.png',
        website: 'http://www.7starshhc.com/',
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
            var infoCard = '<div class="locations-map__dispensary-card">';

            if (dispensary.logo && dispensary.logo.length > 0) {
                infoCard += '<img src="img/dispensaries/' + dispensary.logo + '" />';
            }

            infoCard += '<h5 class="font--sans-serif">' + dispensary.name + '</h5>';

            infoCard += '<div class="font--sans-serif dispensary-card__body">' +
                            '<div class="dispensary-card__body__row no-space"><span>Address</span>' + dispensary.address.street + '</div>' +
                            '<div class="dispensary-card__body__row no-space"><span></span>' + dispensary.address.city + ', ' + dispensary.address.state + ' ' + dispensary.address.zip + '</div>' +
                            '<div class="dispensary-card__body__row"><span></span><a href="' + generateDispensaryDirectionsLink(dispensary) + '" target="_blank">Directions</a></div>' +
                            '<div class="dispensary-card__body__row"><span>Phone</span>' + dispensary.phone + '</div>';

            if (dispensary.website && dispensary.website.length > 0) {
                infoCard += '<div class="dispensary-card__body__row"><span></span><a href="' + dispensary.website + '" target="_blank">Website</a></div>';
            }
                        '</div>';

            infoCard += '<button class="dispensary-card__close-button btn btn-default">Close</button>';
            infoCard += '</div>';

            return infoCard;
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
