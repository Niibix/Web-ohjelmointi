const express = require('express')
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

//Local DB for products
const invoices = [
   {"id": uuidv4(),
    "userId":"69",
    "prodIds":"666",
    "totalSum":"6969 €",
    "date": "2022-12-6"
   }
]

//Get all invoices
router.get('/', (req, res) => {
    res.json(invoices)
}); 

//Get invoices of a user
router.get('/:userId', (req, res) => {
    const invs = invoices.filter(t => t.userId == req.params.userId);
    if (invs.length > 0)
        res.json(invs);
    else
        res.sendStatus(404);
}); 

//Get single invoice of a user
router.get('/:userId/:invoiceId', (req, res) => {
    const invs = invoices.find(t => t.userId == req.params.userId && t.id == req.params.invoiceId);
    if (invs)
        res.json(invs);
    else
        res.sendStatus(404);
}); 

//Purchase / Create new invoice
router.post('/', (req, res) => {
    invoices.push({
        id: uuidv4(),
        userId: req.body.userId,
        prodIds: req.body.prodIds,
        totalSum: req.body.totalSum,
        date: req.body.date
    });
    res.sendStatus(201);
});

//Delete invoice of a user
router.delete('/:userId/:invoiceId', (req, res) => {
    const invoiceId = invoices.findIndex(t => t.userId == req.params.userId && t.id == req.params.invoiceId);
    if (invoiceId === -1)
        res.sendStatus(404);
    else {
        invoices.splice(invoiceId, 1);
        res.sendStatus(202);
    }
});

module.exports = router