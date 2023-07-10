const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


router.get('/flights/:id/tickets/new', (req, res) => {
    const flightId = req.params.id;
    res.render('tickets/new', { flightId });
  });

router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;