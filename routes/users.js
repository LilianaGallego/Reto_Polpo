const express = require('express');
const router = express.Router();

const users = [{id: 1, firstName: 'Daniel', lastName: 'Calvo', email: 'dcalvo@polpocr.com'}, 
{id: 2, firstName: 'Katherine', lastName: 'Calvo', email: 'kcalvo@polpocr.com'}];

router.get('/', (_, res) => {
    res.json({ok: true, users});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    const user = users.filter((user) => user.id === parseInt(id))[0];
    res.json({ok: true, user});
});

router.post('/', (req, res) => {
    const { firstName, lastName,email } = req.body;
    const id = users.length + 1;
    if(firstName && lastName && email){
        users.push({ id, firstName, lastName, email});
        res.json({ok: true, users});
    }
});

module.exports = router;