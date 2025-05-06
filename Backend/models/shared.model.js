const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', default: null },
    origin: {
        lat: Number,
        lng: Number
    },
    destination: {
        address: String,
        lat: Number,
        lng: Number
    },
    status: {
        type: String,
        enum: ['requested', 'matched', 'in_progress', 'completed', 'cancelled'],
        default: 'requested'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ride', rideSchema);
