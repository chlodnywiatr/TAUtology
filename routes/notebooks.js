const express = require('express');
const router = express.Router();

const notebooks = [
    {id: 1, name: "Lenovo Ideapad 700"},
    {id: 2, name: "Thinkpad X220"}
]

router.get('/', (req, res) => {
    res.send(notebooks);
});

router.get('/:id', (req, res) => {
    const notebook = notebooks.find(n => n.id === parseInt(req.params.id));
    if(!notebook) return res.status(404).send("The notebook with given ID was not found");
    res.send(notebook);
});

module.exports = router;