const fs = require('fs');
const path = require("path");

// @see https://answers.netlify.com/t/hosting-a-file-along-with-my-function/1527/21
const fileName = "./body.html";
const resolved = (process.env.LAMBDA_TASK_ROOT) ? path.resolve(process.env.LAMBDA_TASK_ROOT, fileName) : path.resolve(__dirname, fileName);
let body = fs.readFileSync(resolved);

exports.handler = async (event, context) => {
    const sentence = event.queryStringParameters.sentence || "Hello, I'm kagata";
    body.replace("{sentence}", sentence);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: body
    };
};