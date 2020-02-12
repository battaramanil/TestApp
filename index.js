const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Anil Kumar Battaram. How are you...!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}`));
