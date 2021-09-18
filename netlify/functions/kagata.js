import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    const sentence = event.queryStringParameters.sentence || "Hello, I'm kagata";
    const response = await fetch('https://raw.githubusercontent.com/b1n01/kagata/main/body.html');
    let body = response.body;
    body = body.replace("{sentence}", sentence);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: body,
    };
};