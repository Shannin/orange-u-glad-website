var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var MailChimpAPI = require('mailchimp').MailChimpAPI;
var validator = require('validator');

var apiKey = process.env.MAILCHIMP_API_KEY || 'a544f296627f3988d034230b76bba7bc-us11';
var assetDir = 'public';
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var app = express();
app.use(express.static(assetDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mailchimp = MailChimpAPI(apiKey, { version : '2.0' });

app.post('/api/addEmailToList', function(req, res) {
    var values = req.body;

    if (values.emailList === '') {
        res.json({'success': false, 'message': 'Unknown email list'});
        return;
    }

    if (values.email === '') {
        res.json({'success': false, 'message': 'Please enter an Email Address'});
        return;
    }

    if (!validator.isEmail(values.email)) {
        res.json({'success': false, 'message': 'Please enter a valid Email Address'});
        return;
    }

    var params = {
        id: values.emailList,
        batch: [{
            email: {
                email: values.email,
            },
            email_type: 'html',
        }],
        double_optin: false, // dont send opt in email
    };

    mailchimp.call('lists', 'batch-subscribe', params, function (error, data) {
        if (error) {
            console.log(error);
            res.json({'success': false, 'message': 'Something went wrong'});
            return;
        }

        res.json({'success': true, 'message': 'Successfully added to the email list'});
    });
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + assetDir + '/'));
});

app.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ": " + server_port);
});
