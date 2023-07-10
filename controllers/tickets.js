const Flight = require('../models/flight');
const Ticket = require('../models/flight');

module.exports = {
  create,
  new: newTicket
};

async function create(req, res) {
  try {
    const flight = await Flight.findById(req.params.id).exec();
    const tickets = await Ticket.find({ flight: flight._id }).exec();

    flight.tickets.push(req.body);
    await flight.save();

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
 
  }
}

function newTicket(req, res) {
    res.render('tickets/new', { errorMsg: '' })
}