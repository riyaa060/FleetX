const Ride = require('../models/shared.model.js');

exports.requestRide = async (req, res) => {
    try {
        const { userId, origin, destination } = req.body;

        const ride = await Ride.create({
            userId,
            origin,
            destination
        });

        res.status(201).json({ ride });
    } catch (error) {
        console.error('Error requesting ride:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.acceptRide = async (req, res) => {
    try {
        const { rideId, driverId } = req.body;

        const ride = await Ride.findByIdAndUpdate(rideId, {
            driverId,
            status: 'matched'
        }, { new: true });

        res.json({ ride });
    } catch (error) {
        console.error('Error accepting ride:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateRideStatus = async (req, res) => {
    try {
        const { rideId, status } = req.body;

        const ride = await Ride.findByIdAndUpdate(rideId, { status }, { new: true });

        res.json({ ride });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUserRides = async (req, res) => {
    try {
        const { userId } = req.params;

        const rides = await Ride.find({ userId }).sort({ createdAt: -1 });

        res.json({ rides });
    } catch (error) {
        console.error('Error fetching rides:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
