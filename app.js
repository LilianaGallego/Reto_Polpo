const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users',require('./routes/users'));
app.use('/',require('./routes/todos'));

const todos = [{id: 1, title:'Universidad', keywords: ['estudios', 'importante', 'academia'],userId:1},
{id: 2, title:'Casa', keywords: ['oficio', 'necesario', 'orden'],userId:1}]

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});