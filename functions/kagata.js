import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    const content = event.queryStringParameters.c || "Hello, I'm kagata";
    // TODO how to fetch body.html locally?
    const response = await fetch('https://kagata.netlify.app/assets/body.html');
    let body = await response.text();
    body = body.replace("{content}", content);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: body,
    };
};