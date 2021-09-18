// const fs = require("fs");
// const path = require("path");

// @see https://answers.netlify.com/t/hosting-a-file-along-with-my-function/1527/21
// const fileName = "./kagata/body.html";
// const resolved = (process.env.LAMBDA_TASK_ROOT) ? path.resolve(process.env.LAMBDA_TASK_ROOT, fileName) : path.resolve(__dirname, fileName);
// let body = fs.readFileSync(resolved);

let body = `
<!DOCTYPE html>
<html lang="en" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Kagata</title>
    <style>
        @font-face {
            font-family: ElectroHarmonix;
            src: url("https://raw.githubusercontent.com/b1n01/kagata/main/electroharmonix.regular.ttf");
        }

        html,
        body {
            font-family: ElectroHarmonix;
        }
    </style>
</head>

<body class="h-full bg-red-600">
    <div class="flex w-full h-full justify-center items-center">
        <h1 class="text-8xl text-white border-8  p-16">{sentence}</h1>
    </div>
</body>

</html>
`;

exports.handler = async (event, context) => {
    const sentence = event.queryStringParameters.sentence || "Hello, I'm kagata";
    body = body.replace("{sentence}", sentence);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: event.queryStringParameters.sentence,
    };
};