import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    const content = event.queryStringParameters.c || "Hello, I'm kagata";
    const response = await fetch(process.env.ENDPOINT + '/body.html');
    let body = await response.text();
    body = body.replace("{content}", content);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: body,
    };
};