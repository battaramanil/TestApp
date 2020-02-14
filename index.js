const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello...How are you now...Welcome to ERAD......Welcome...!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}`));
