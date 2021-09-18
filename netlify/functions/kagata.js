var fs = require('fs');
let body = fs.readFileSync(require.resolve('./body.html'));
// let body = '';

exports.handler = async (event, context) => {
    const sentence = event.queryStringParameters.sentence || "Hello, I'm kagata";
    body.replace("{sentence}", sentence);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: __dirname
    };
};