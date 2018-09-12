const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bus_routeSchema = new Schema({
	_id: {
		type: String,
		required: true
	},
	route: [{
		type: String,
		required: true 
	}]

});

var BusRoutes = mongoose.model('routes' , bus_routeSchema );
module.exports = BusRoutes;
