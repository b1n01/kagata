import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    const content = event.queryStringParameters.c || "Hello, I'm kagata";
    const author = event.queryStringParameters.a || "Kagata";
    const date = new Date().toLocaleDateString('it-IT', {year: 'numeric', month: 'long', day: 'numeric' });

    const response = await fetch(process.env.ENDPOINT + '/body.html');
    let body = await response.text();

    body = body.replace("{content}", content);
    body = body.replace("{author}", author);
    body = body.replace("{date}", date);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: body,
    };
};