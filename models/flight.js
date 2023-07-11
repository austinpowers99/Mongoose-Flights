const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const Schema = mongoose.Schema;


module.exports = {
  deleteOne
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = flights.findIndex(flight => flight.id === id);
  flights.splice(idx, 1);
}

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: Number,
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight'
  }
}, {
  timestamps: true
});

const destinationSchema = new Schema({
  airport: {
      type: String,
      enum: ['YVR', 'YYZ', 'LAX', 'AMD', 'LHR'],
      required: true
    },
  arrival: Date,

}, {
    timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['WestJet', 'Emirates', 'AirCanada', 'Qatar'],
    required: true
  },
  airport: {
    type: String,
    enum: ['YVR', 'YYZ', 'LAX', 'AMD', 'LHR'],
    required: true
  },
  flightNo: Number,
  departs: Date,
  destinations: [destinationSchema],
  tickets: [ticketSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);