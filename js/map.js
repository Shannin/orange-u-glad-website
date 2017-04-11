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
        name: 'Alternative Medical Center',
        address: {
            street: '1220 Blumenfeld Drive',
            city: 'Sacramento',
            state: 'CA',
            zip: '95815',
        },
        location: {lat: 38.604024, lng: -121.438648},
        phone: '916-564-1100',
        website: 'http://www.amc916.com',
    },
    {
        name: 'Alternatives Health Collective',
        address: {
            street: '1603 Hampton Way',
            city: 'Santa Rosa',
            state: 'CA',
            zip: '95407',
        },
        location: {lat: 38.428261, lng: -122.738194},
        phone: '707-525-1420',
        logo: 'alternatives-sr.png',
        website: 'https://weedmaps.com/dispensaries/alternatives-health-collective#/menu',
    },
    {
        name: 'Ancient Wisdom',
        address: {
            street: '18680 N. Hwy 88 Suite C',
            city: 'Lockeford',
            state: 'CA',
            zip: '95237',
        },
        location: {lat: 38.153860, lng: -121.155866},
        phone: '209-426-1112',
        website: 'https://weedmaps.com/dispensaries/ancient-wisdom#/menu',
    },
    {
        name: 'Barbary Coast',
        address: {
            street: '952 Mission St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94103',
        },
        location: {lat: 37.781818, lng: -122.407632},
        phone: '510-338-3632',
        logo: 'barbarycoast.png',
        website: 'http://www.barbarycoastsf.org',
    },
    {
        name: 'Bloom Room',
        address: {
            street: '471 Jessie St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94103',
        },
        location: {lat: 37.782073, lng: -122.408434},
        phone: '415-543-7666',
        logo: 'bloomroom.png',
        website: 'http://www.bloomroomsf.com',
    },
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
/*
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
*/
    {
        name: 'Golden Health',
        address: {
            street: '1030 Joellis Way',
            city: 'Sacramento',
            state: 'CA',
            zip: '95815',
        },
        location: {lat: 38.601542, lng: -121.442913},
        phone: '916-646-6340',
        website: 'https://weedmaps.com/dispensaries/golden-health-and-wellnes#/details',
    },
    {
        name: 'Green Gold Cultivators',
        address: {
            street: '568 Angels Rd',
            city: 'San Andreas',
            state: 'CA',
            zip: '95249',
        },
        location: {lat: 38.188752, lng: -120.675429},
        phone: '209-674-8008',
        website: 'https://weedmaps.com/dispensaries/green-gold-cultivators#/details',
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
/*
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
*/
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
        name: '',
        address: {
            street: '2641 Hwy 4 #7A',
            city: 'Arnold',
            state: 'CA',
            zip: '95223',
        },
        location: {lat: 38.233510, lng: -120.366955},
        phone: '209-890-3647',
        logo: 'littletrees.png'
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
        name: 'Medithrive Ocean',
        address: {
            street: '1545 Ocean Ave',
            city: 'San Francisco',
            state: 'CA',
            zip: '94112',
        },
        location: {lat: 37.724271, lng: -122.458990},
        phone: '415-859-5761',
        logo: 'medithrive.png',
        website: 'http://www.medithrive.com',
    },
    {
        name: 'My Green Giant',
        address: {
            street: '8130 Lorraine Ave #324',
            city: 'Stockton',
            state: 'CA',
            zip: '95210',
        },
        location: {lat: 38.023737, lng: -121.280454},
        phone: '844-315-3066',
        logo: 'mygreen.png',
        website: 'http://www.mygreengiant.net',
    },
    {
        name: 'Tahoe Wellness',
        address: {
            street: '3445 Lake Tahoe Blvd',
            city: 'South Lake Tahoe',
            state: 'CA',
            zip: '96150',
        },
        location: {lat: 38.946212, lng: -119.965582},
        phone: '530-544-8000',
        logo: 'tahoe-wellness.png',
        website: 'http://www.http://tahoewellnesscoop.org',
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
        name: 'Theraleaf Relief',
        address: {
            street: '1014 Timothy Drive',
            city: 'San Jose',
            state: 'CA',
            zip: '95133',
        },
        location: {lat: 37.364150, lng: -121.879811},
        phone: '408-849-3706',
        logo: 'theraleaf.png',
        website: 'https://weedmaps.com/dispensaries/theraleaf-relief-inc',
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
        name: 'Zen Garden Wellness',
        address: {
            street: '2201 Northgate Blvd Suite H',
            city: 'Sacramento',
            state: 'CA',
            zip: '95833',
        },
        location: {lat: 38.607279, lng: -121.476421},
        phone: '916-292-8120',
        logo: 'zengarden.png',
        website: 'https://weedmaps.com/dispensaries/zen-garden-wellness#/details',
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
        name: 'A+ Organics',
        range: [
            {lat: 38.114503, lng: -122.314911},
            {lat: 38.379816, lng: -122.062225},
            {lat: 38.674186, lng: -121.562347},
            {lat: 38.800587, lng: -121.257477},
            {lat: 38.652740, lng: -121.013031},
            {lat: 38.386275, lng: -121.317902},
            {lat: 38.323814, lng: -121.746368},
            {lat: 38.053971, lng: -122.177582},
        ],
        phone: '916-540-0212',
        logo: 'aplus.png',
        menu: 'https://more.weedmaps.com/deliveries/aplusorganics?page=4',
        website: 'http://www.aplusorganics.club'
    },
    {
        name: 'Blackbird Botanicals',
        range: [
            {lat: 36.826566, lng: -119.906845},
            {lat: 36.915553, lng: -119.750290},
            {lat: 36.801279, lng: -119.630814},
            {lat: 36.707754, lng: -119.684372},
            {lat: 36.663703, lng: -119.812088},
        ],
        phone: '619-654-0287',
        logo: 'blackbirdbotanical.png',
        menu: 'https://weedmaps.com/deliveries/blackbird-botanical-deliveries#/menu'
    },
    {
        name: 'Cake Fam Delivery',
        range: [
            {lat: 37.967867, lng: -121.379356},
            {lat: 38.034960, lng: -121.371117},
            {lat: 38.048480, lng: -121.299706},
            {lat: 38.012242, lng: -121.207695},
            {lat: 37.945128, lng: -121.168556},
            {lat: 37.896920, lng: -121.187096},
            {lat: 37.876327, lng: -121.309319},
        ],
        phone: '209-898-2055',
        menu: 'https://weedmaps.com/deliveries/cake-fam-delivery-stockton#/menu'
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
        name: 'Grasshopper SF',
        range: [
            {lat: 37.783121, lng: -122.513180},
            {lat: 37.790718, lng: -122.488461},
            {lat: 37.809708, lng: -122.476788},
            {lat: 37.805910, lng: -122.447262},
            {lat: 37.809436, lng: -122.409840},
            {lat: 37.785292, lng: -122.384777},
            {lat: 37.747567, lng: -122.375507},
            {lat: 37.726661, lng: -122.432842},
            {lat: 37.708465, lng: -122.464085},
            {lat: 37.721501, lng: -122.508373}
        ],
        phone: '415-340-2438',
        website: 'http://www.grasshoppersf.com',
        menu: 'http://www.grasshoppersf.com/menu/'
    },
    {
        name: 'Green Grizzly',
        range: [
            {lat: 38.020745, lng: -122.147369},
            {lat: 38.049950, lng: -122.051926},
            {lat: 37.974211, lng: -121.966782},
            {lat: 37.905978, lng: -121.995621},
            {lat: 37.852865, lng: -122.079391},
            {lat: 37.808394, lng: -122.242813},
            {lat: 37.829006, lng: -122.303238},
            {lat: 37.889723, lng: -122.318344},
            {lat: 37.920063, lng: -122.197495},
            {lat: 37.968798, lng: -122.142563},
        ],
        phone: '925-808-5269'
    },
    {
        name: 'Jah Healing Caregivers',
        range: [
            {lat: 33.218836, lng: -117.406082},
            {lat: 33.431119, lng: -117.375870},
            {lat: 33.592565, lng: -117.301712},
            {lat: 33.685175, lng: -117.172623},
            {lat: 33.594853, lng: -117.036667},
            {lat: 33.369209, lng: -117.017441},
            {lat: 33.110775, lng: -116.995468},
            {lat: 33.048637, lng: -117.095718},
            {lat: 33.004885, lng: -117.281113}
        ],
        phone: '619-654-0287',
        menu: 'https://weedmaps.com/deliveries/j-h-care-givers-2'
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
        name: 'Mountainside Cooperative',
        range: [
            {lat: 37.254576, lng: -122.045574},
            {lat: 37.299925, lng: -121.998539},
            {lat: 37.313852, lng: -121.953220},
            {lat: 37.306207, lng: -121.883526},
            {lat: 37.254850, lng: -121.876659},
            {lat: 37.223417, lng: -121.917171},
            {lat: 37.235718, lng: -121.996136},
        ],
        phone: '408-688-6307',
        menu: 'https://weedmaps.com/deliveries/mountainside-cooperative#/menu'
    },
    {
        name: 'Nollie Green-Blu Solutions',
        range: [
            {lat: 38.599893, lng: -121.503811},
            {lat: 38.586208, lng: -121.447163},
            {lat: 38.557756, lng: -121.412487},
            {lat: 38.510758, lng: -121.416264},
            {lat: 38.512907, lng: -121.521664},
        ],
        phone: '916-297-2114',
        menu: 'https://weedmaps.com/deliveries/nollie-green-blu-solutions#/menu'
    },
    {
        name: 'STC Alternative Healing',
        range: [
            {lat: 38.371203, lng: -121.490936},
            {lat: 38.401344, lng: -121.251984},
            {lat: 38.590510, lng: -121.213531},
            {lat: 38.796306, lng: -121.378326},
            {lat: 38.781320, lng: -121.652985},
            {lat: 38.663464, lng: -121.721649},
            {lat: 38.513184, lng: -121.683197},
            {lat: 38.409953, lng: -121.587067},
        ],
        phone: '916-661-1542',
        website: 'https://www.stcalternativehealing.com',
        menu: 'https://weedmaps.com/deliveries/stc-alternative-healing#/menu'
    },
    {
        name: 'Stoned Age Meds',
        range: [
            {lat: 38.037124, lng: -121.367683},
            {lat: 38.051724, lng: -121.253700},
            {lat: 38.023061, lng: -121.159630},
            {lat: 37.950543, lng: -121.177483},
            {lat: 37.902880, lng: -121.209068},
            {lat: 37.873617, lng: -121.272926},
            {lat: 37.909381, lng: -121.353264},
            {lat: 37.973280, lng: -121.369743},
        ],
        phone: '510-560-4372',
        logo: 'stonedagemeds.png',
        menu: 'https://weedmaps.com/deliveries/stoned-age-meds-3'
    },
    {
        name: 'Titan 420',
        range: [
            {lat: 38.147366, lng: -121.345711},
            {lat: 38.162484, lng: -121.260567},
            {lat: 38.060375, lng: -121.224174},
            {lat: 37.948377, lng: -121.204948},
            {lat: 37.899087, lng: -121.270180},
            {lat: 37.930507, lng: -121.360130},
            {lat: 38.073889, lng: -121.334724},
        ],
        phone: '209-230-9485',
        logo: 'titan420.jpg',
        menu: 'https://weedmaps.com/deliveries/my-green-giant-stockton#/menu'
    },
    {
        name: 'Top Shelf Express',
        range: [
            {lat: 37.585245, lng: -122.331734},
            {lat: 37.573273, lng: -122.294655},
            {lat: 37.525367, lng: -122.199898},
            {lat: 37.430007, lng: -122.061882},
            {lat: 37.430007, lng: -121.955452},
            {lat: 37.430552, lng: -121.868935},
            {lat: 37.353085, lng: -121.805077},
            {lat: 37.259145, lng: -121.791344},
            {lat: 37.227441, lng: -121.870308},
            {lat: 37.228534, lng: -121.980858},
            {lat: 37.300668, lng: -122.096901},
            {lat: 37.489961, lng: -122.307014},
            {lat: 37.548235, lng: -122.371559},
        ],
        phone: '408-375-5465',
        logo: 'topshelfexpress.png',
        menu: 'https://weedmaps.com/deliveries/top-shelf-guaranteed-express#/menu'
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
            var dispensaryMarkers = allDispensaries.map(function (d) {
                return d.marker;
            });

            var deliveryMarkers = allDeliveryServices.map(function (d) {
                return d.marker;
            });

            var allMarkers = dispensaryMarkers.concat(deliveryMarkers)

            console.log(allMarkers)





            zoomToAllMarkers(map, allMarkers);

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
