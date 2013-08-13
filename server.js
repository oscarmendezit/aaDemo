// Node.js entry point

var aws = require("./libs/aws");

var accessKeyId = "AKIAISWN4YIRSTNPXR3A";

var secretAccessKey = "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";

ses = aws.createSESClient(accessKeyId, secretAccessKey);

ses.call("GetSendQuota", {}, function (err, result) {
    console.log(JSON.stringify(result));
});

ses.call("GetSendStatistics", {}, function (err, result) {
    console.log(JSON.stringify(result));
});

ses.call("ListVerifiedEmailAddresses", {}, function (err, result) {
    console.log(JSON.stringify(result));
});

var recipient_address = 'oscar@informatech.cr';
var sender_address = 'oscar.mendez@informatech.cr';
var send_args = {
    'Destination.ToAddresses.member.1': recipient_address,
    'Message.Body.Text.Charset': 'UTF-8',
    'Message.Body.Text.Data': 'Hello text!',
    'Message.Body.Html.Charset': 'UTF-8',
    'Message.Body.Html.Data': '<b>Hello body!</b>',
    'Message.Subject.Charset': 'UTF-8',
    'Message.Subject.Data': 'Test node.js and SES',
    'Source': sender_address
};
ses.call('SendEmail', send_args, function (err, result) {
    console.log(result);
});
