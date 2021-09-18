exports.handler = async (event, context) => {
    const sentence = event.queryStringParameters.sentence || "Hello, I'm kagata";

    let response = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kagata</title>
    <style>
            @font-face { font-family: ElectroHarmonix; src: url('https://raw.githubusercontent.com/b1n01/kagata/main/electroharmonix.regular.ttf'); } 
        html, body {
            font-family: ElectroHarmonix;
        }
    </style>
</head>
<body>
    <h1>${sentence}</h1>
</body>
</html>
    `;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html"},
    body: response
  };
};