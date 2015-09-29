var express = require('express');
var app = express();
var path = require('path');
var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = '';
var mailchimp = MailChimpAPI(apiKey, { version : '2.0' });

var assetDir = 'public';
var port = 8080;

app.use(express.static(assetDir));

app.get('/api/addEmailToList', function(req, res) {
    var params = {
        id: '',
        batch: [{
            email: {
                email: 'shanninc@gmail.com',
            },
            email_type: 'html',
        }],
        double_optin: false, // dont send opt in email
    }

    mailchimp.call('lists', 'batch-subscribe', params, function (error, data) {
        console.log(error);
        console.log(data);

        res.send('added');
    });
});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + assetDir + '/'));
});

app.listen(port);
console.log('Running on port: ' + port);