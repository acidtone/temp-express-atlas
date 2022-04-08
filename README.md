# Express: Hello World!
## Prerequisites
1. Initialized `npm` project with `package.json` file. See: [Getting started with `npm`](https://gist.github.com/acidtone/d57f41d7c18d0d198263c7bc3ab230e3).
2. [`express` installed](https://gist.github.com/acidtone/ef2884edd43db2182ad5a2466e7c4277) as project dependency.
3. Entry page (i.e. `server.js`) present in the project root.

## Example directory structure

```
project-root
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── server.js
```

## Instructions
1. Load project dependencies:

    ```js
    const express = require('express');
    ```

2. Create an express server. The interface for every module is unique. Express wants you to start by invoking the function that `express` exports to `require()`.

    ```js
    const app = express();
    ```

    - `express()` returns an object. It includes many methods that come in handy; today's favourite is `app.get()` which allows us to attach middleware to `GET` requests.

3. Add endpoint handler for `GET /` requests (i.e. the home page):

    ```js
    app.get('/', (request, response) => {
      response.send('Hello World!')
    })
    ```

4. Set a port the server will listed to. `process.env.PORT` points to an optional `.env` file (see [`dotenv`](https://www.npmjs.com/package/dotenv)) that will default to `3000` if it doesn't exist.

    ```js
    const PORT = process.env.PORT || 3000;
    ```

5. Start the server.

    ```js
    app.listen(PORT, function(){
      console.log(`Listening on port ${PORT}`);
    });
    ```

    - The server will start inside the terminal window (making it pretty useless, besides logging to the console).

## Related Gists
- [Express: Add an additional `GET` endpoint handler]
- [Express: Catch `404 Not Found` errors](https://gist.github.com/acidtone/f5a08d0f15e70c4ddf1d40571b9e0645)
- [Express: Serving static files](https://gist.github.com/acidtone/e2590b67f8fd701a36f7a04e62caa594)