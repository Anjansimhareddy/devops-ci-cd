const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello from DevOps CI/CD!<br>welcome to my new project<br>updated:Deployed with CI/CD'));


app.listen(port, () => console.log(`App running at http://localhost:${port}`));
