var allDispensaries = [
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
        name: 'CC101',
        address: {
            street: '6435 Florin Perkins Rd',
            city: 'Sacramento',
            state: 'CA',
            zip: '95828',
        },
        location: {lat: 38.509532, lng: -121.390239},
        phone: '916-387-6233',
        website: 'http://cc101sac.com',
    },
    {
        name: 'Cloud 9',
        address: {
            street: '5711 Florin Perkins Rd',
            city: 'Sacramento',
            state: 'CA',
            zip: '95828',
        },
        location: {lat: 38.522980, lng: -121.389761},
        phone: '916-387-8605',
        website: 'http://sacloud9.com',
    },
    {
        name: 'Doctors Orders Co-Op',
        address: {
            street: '1704 Main Ave',
            city: 'Sacramento',
            state: 'CA',
            zip: '95838',
        },
        location: {lat: 38.654371, lng: -121.426569},
        phone: '916-564-2112',
        website: 'http://doctorsordersrx.com',
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
        name: 'House of Organics',
        address: {
            street: '8848 Fruitridge Rd',
            city: 'Sacramento',
            state: 'CA',
            zip: '95826',
        },
        location: {lat: 38.525149, lng: -121.373803},
        phone: '916-381-3769',
        website: 'http://sachouseoforganics.com',
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
        name: 'THC',
        address: {
            street: '6666 Fruitridge Rd',
            city: 'Sacramento',
            state: 'CA',
            zip: '95820',
        },
        location: {lat: 38.524707, lng: -121.424713},
        phone: '916-476-4431',
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
        name: 'The Healing Flower',
        address: {
            street: '1060 Reno Ave Suite d',
            city: 'Modesto',
            state: 'CA',
            zip: '95351',
        },
        location: {lat: 37.649938, lng: -121.026467},
        phone: '209-577-1660',
        logo: 'the-healing-flower.png',
    },
    {
        name: 'The Lion Empire',
        address: {
            street: '831 E Main St',
            city: 'Stockton',
            state: 'CA',
            zip: '95202',
        },
        location: {lat: 37.954604, lng: -121.280106},
        phone: '209-475-8022',
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

var allDeliveryServices = [
    {
        name: '7 Leaf Health',
        range: [
            {lat: 37.746524, lng: -121.832199},
            {lat: 37.770884, lng: -121.554108},
            {lat: 37.830565, lng: -121.320648},
            {lat: 37.778483, lng: -121.348114},
            {lat: 37.705723, lng: -121.317902},
            {lat: 37.657902, lng: -121.470337},
            {lat: 37.656815, lng: -121.683197},
            {lat: 37.622016, lng: -121.856232},
            {lat: 37.915120, lng: -122.133636},
            {lat: 37.956279, lng: -122.064972},
            {lat: 37.912953, lng: -121.985321},
            {lat: 37.795848, lng: -121.904297}
        ],
        phone: '925-261-8478',
        logo: '7leaf.png',
        menu: 'https://weedmaps.com/deliveries/7-leaf-health#/menu'
    },
    {
    name: 'East Bay Meds',
        range: [
            {lat: 37.983291, lng: -122.096901},
            {lat: 37.983021, lng: -122.067719},
            {lat: 37.957831, lng: -122.054329},
            {lat: 37.899202, lng: -122.041454},
            {lat: 37.863568, lng: -121.985321},
            {lat: 37.703771, lng: -121.879578},
            {lat: 37.701055, lng: -121.960602},
            {lat: 37.817844, lng: -122.125053},
            {lat: 37.899434, lng: -122.225304}
        ],
        phone: '925-324-3349',
        logo: 'east-bay-meds.png',
        website: 'http://www.eastbaymeds.org',
        menu: 'https://weedmaps.com/deliveries/east-bay-meds-2#/menu'
    },
        {
        name: 'Higher Elevation',
        range: [
            {lat: 37.746524, lng: -121.832199},
            {lat: 37.770884, lng: -121.554108},
            {lat: 37.830565, lng: -121.320648},
            {lat: 37.843580, lng: -121.191559},
            {lat: 37.796933, lng: -121.151733},
            {lat: 37.705723, lng: -121.317902},
            {lat: 37.657902, lng: -121.470337},
            {lat: 37.656815, lng: -121.683197},
            {lat: 37.622016, lng: -121.856232},
            {lat: 37.663338, lng: -121.942749},
            {lat: 37.723105, lng: -121.959229}
        ],
        phone: '925-579-3330',
        logo: 'higher-elevation.png',
        website: 'http://www.higherelevationcollective.com',
        menu: 'https://weedmaps.com/deliveries/higher-elevation'
    },
    {
        name: 'Marygold Delivery',
        range: [
            {lat: 38.021979, lng: -122.152519},
            {lat: 38.057131, lng: -122.024117},
            {lat: 38.014643, lng: -121.780701},
            {lat: 37.943741, lng: -121.774521},
            {lat: 37.774056, lng: -121.928329},
            {lat: 37.755600, lng: -121.990128},
            {lat: 37.877648, lng: -122.101364},
            {lat: 37.948072, lng: -122.119217}
        ],
        phone: '925-979-5119',
        logo: 'marygolddelivery.png',
        website: 'http://www.marygolddelivery.com',
        menu: 'http://www.marygolddelivery.com/browse-our-menu.html'
    },
    {
        name: 'Valley Essentials',
        range: [
            {lat: 37.466334, lng: -122.114925},
            {lat: 37.437444, lng: -122.090893},
            {lat: 37.406906, lng: -122.053127},
            {lat: 37.397906, lng: -122.028065},
            {lat: 37.370899, lng: -121.997509},
            {lat: 37.352343, lng: -121.998539},
            {lat: 37.338696, lng: -122.015705},
            {lat: 37.335421, lng: -122.083683},
            {lat: 37.416996, lng: -122.217922},
            {lat: 37.446167, lng: -122.170887},
        ],
        phone: '650-823-3760',
        logo: 'valley-essentials.png',
        website: 'https://www.valleyessentialsinc.com',
        menu: 'https://www.valleyessentialsinc.com/store/c1/Featured_Products.html'
    }
]

// this is shitty.
function initMap() {
    (function($) {
        var center;
        var currentInfoWindow;
        var currentPoly;
        var locationsMap = $('#locations-map');

        $(locationsMap).on('click', '.dispensary-card__close-button', function (event) {
            if (currentInfoWindow != null) {
                currentInfoWindow.close();
                currentInfoWindow = null;
            }

            if (currentPoly != null) {
                currentPoly.setMap(null);
                currentPoly = null;
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

            google.maps.event.addDomListener(map, 'bounds_changed', function() {
                console.log("bounds");
            });

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(center);
            });

            addDispensariesToMap(map, allDispensaries);
            addDeliveryServicesToMap(map, allDeliveryServices);

            // zoom out to all markers
            var dispensaryMarkers = allDispensaries.map(function (dispensary) {
                return dispensary.marker;
            });
            zoomToAllMarkers(map, dispensaryMarkers);

            map.setOptions({draggable: !screenSizeMobile()});

            $(window).on('resize', function() {
                map.setOptions({draggable: !screenSizeMobile()});
            });
        }

        function addDispensariesToMap(map, dispensaries) {
            dispensaries.forEach(function(dispensary) {
                var marker = addMarkerToMap(map, dispensary.location, dispensary, 'dispensary');
                setMarkerClickEvent(map, marker, dispensary);

                dispensary.marker = marker;
            });
        }

        function addDeliveryServicesToMap(map, deliveryServices) {
            deliveryServices.forEach(function (delivery) {
                var poly = new google.maps.Polygon({
                    paths: delivery.range,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                });

                var deliveryServiceBounds = getBoundsForDeliveryRange(delivery.range);
                var location = getPositionForDeliveryMarker(map.getBounds(), deliveryServiceBounds);

                var marker = addMarkerToMap(map, location, delivery, 'delivery');
                setMarkerClickEvent(map, marker, delivery);

                delivery.marker = marker;
                delivery.poly = poly;
                delivery.rangeBounds = deliveryServiceBounds;
            });
        }

        function addMarkerToMap(map, location, dispensary, type) {
            var img = type == 'delivery' ? 'img/orange.png' : 'img/orange.png';
            var size = new google.maps.Size(25,25);
            var icon = new google.maps.MarkerImage(img, null, null, null, size);

            console.log(dispensary);

            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: icon
            });

            return marker;
        }

        function getBoundsForDeliveryRange(range) {
            var latMax = -1000;
            var latMin = 1000;
            var lngMax = -1000;
            var lngMin = 1000;

            for (var i = 0; i < range.length; i++) {
                var coord = range[i];

                if (coord.lat > latMax) {
                    latMax = coord.lat;
                }

                if (coord.lat < latMin) {
                    latMin = coord.lat;
                }

                if (coord.lng > lngMax) {
                    lngMax = coord.lng;
                }

                if (coord.lng < lngMin) {
                    lngMin = coord.lng;
                }
            }

            return {
                latMax: latMax,
                latMin: latMin,
                lngMax: lngMax,
                lngMin: lngMin
            };
        }

        function getPositionForDeliveryMarker(mapBounds, rangeBounds) {
            if (!mapBounds) {
                return {
                    lat: ((rangeBounds.latMax - rangeBounds.latMin) / 2) + rangeBounds.latMin,
                    lng: ((rangeBounds.lngMax - rangeBounds.lngMin) / 2) + rangeBounds.lngMin
                }
            }

            var latMin = mapBounds[0][0] < rangeBounds.latMin ? mapBounds[0][0] : rangeBounds.latMin;
            var latMax = mapBounds[1][0] > rangeBounds.latMax ? mapBounds[1][0] : rangeBounds.latMax;
            var lngMin = mapBounds[0][0] < rangeBounds.lngMin ? mapBounds[0][0] : rangeBounds.lngMin;
            var lngMax = mapBounds[1][0] > rangeBounds.lngMax ? mapBounds[1][0] : rangeBounds.lngMax;

            return {
                lat: ((latMax - latMin) / 2) + latMin,
                lng: ((lngMax - lngMin) / 2) + lngMin
            }
        }

        function setMarkerClickEvent(map, marker, dispensary) {
            marker.addListener('click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                if (currentPoly != null) {
                    currentPoly.setMap(null);
                    currentPoly = null;
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
                    var infoWindow = new google.maps.InfoWindow({
                        content: dispensaryCardContent
                    });
                    infoWindow.open(map, marker);
                    currentInfoWindow = infoWindow;

                    if (dispensary.poly) {
                        dispensary.poly.setMap(map);

                        google.maps.event.addListener(infoWindow,'closeclick',function() {
                            dispensary.poly.setMap(null);
                        });

                        currentPoly = dispensary.poly;
                    }
                }
            });
        }

        function generateDispensaryCardContent(dispensary) {
            var infoCard = '<div class="locations-map__dispensary-card">';

            if (dispensary.logo && dispensary.logo.length > 0) {
                infoCard += '<img src="img/dispensaries/' + dispensary.logo + '" />';
            }

            infoCard += '<h5 class="font--sans-serif">' + dispensary.name + '</h5>';
            infoCard += '<div class="font--sans-serif dispensary-card__body">';

            if (dispensary.address) {
                infoCard += '<div class="dispensary-card__body__row no-space"><span>Address</span>' + dispensary.address.street + '</div>' +
                                '<div class="dispensary-card__body__row no-space"><span></span>' + dispensary.address.city + ', ' + dispensary.address.state + ' ' + dispensary.address.zip + '</div>' +
                                '<div class="dispensary-card__body__row"><span></span><a href="' + generateDispensaryDirectionsLink(dispensary) + '" target="_blank">Directions</a></div>';
            }

            if (dispensary.phone) {
                infoCard += '<div class="dispensary-card__body__row"><span>Phone</span>' + dispensary.phone + '</div>';
            }

            if (dispensary.website && dispensary.website.length > 0) {
                infoCard += '<div class="dispensary-card__body__row"><span></span><a href="' + dispensary.website + '" target="_blank">Website</a></div>';
            }

            if (dispensary.menu && dispensary.menu.length > 0) {
                infoCard += '<div class="dispensary-card__body__row"><span></span><a href="' + dispensary.menu + '" target="_blank">Menu</a></div>';
            }

            infoCard += '</div>';

            infoCard += '<button class="dispensary-card__close-button btn btn-default">Close</button>';
            infoCard += '</div>';

            return infoCard;
        }

        function generateDispensaryDirectionsLink(dispensary) {
            var base = 'https://maps.google.com?saddr=Current+Location&daddr=';
            var parts = [dispensary.address.street, dispensary.address.state, dispensary.address.zip];
            return base + encodeURIComponent(parts.join(" "));
        }


        init();


        // helper functions

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
    })(jQuery);
}
