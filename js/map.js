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

var currentInfoWindow;


function initMap() {
    var map = new google.maps.Map(document.getElementById('google-maps-box'), {
        center: {lat: 37.7396515, lng: -122.2921592},
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    });

    var img = 'img/location-marker.png';
    var size = new google.maps.Size(25,25);
    var icon = new google.maps.MarkerImage(img, null, null, null, size);

    for (var i = 0; i < dispensaries.length; i++) {
        var dispensary = dispensaries[i];

        var marker = new google.maps.Marker({
            position: dispensary.location,
            map: map,
            icon: icon
        });

        setMarkerClickEvent(map, marker, dispensary);
    }
}

function setMarkerClickEvent(map, marker, dispensary) {
    marker.addListener('click', function () {
        if (currentInfoWindow != null) {
            currentInfoWindow.close();
        }

        var infowindow = generateInfoWindow(dispensary);
        infowindow.open(map, marker);

        currentInfoWindow = infowindow;
    });
}

function generateInfoWindow(dispensary) {
    var contentString =
        '<div class="locations-map__map-box__marker-info-box">' +
            '<img src="img/dispensaries/' + dispensary.logo + '" />' +
            '<h5 class="font--sans-serif">' + dispensary.name + '</h5>' +
            '<div class="font--sans-serif marker-info-box__body">' +
                '<div class="marker-info-box__body__row no-space"><span>Address</span>' + dispensary.address.street + '</div>' +
                '<div class="marker-info-box__body__row"><span></span>' + dispensary.address.city + ', ' + dispensary.address.state + ' ' + dispensary.address.zip + '</div>' +
                '<div class="marker-info-box__body__row"><span>Phone</span>' + dispensary.phone + '</div>' +
                '<div class="marker-info-box__body__row"><span></span><a href="' + dispensary.website + '" target="_blank">Website</a></div>' +
            '</div>' +
        '</div>';

    return new google.maps.InfoWindow({
        content: contentString
    });
}
