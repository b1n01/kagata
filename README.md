# Kagata!!!

## Up and running

```
npm i
npm install netlify-cli -g
netlify login
netlify dev
```

 ## Gotcha
 Right now `functions/kagata.js` is fetching `body.html` from netlify, if the hosting service will be swapped it will break