const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
	path: {
		type: String
	},
	descr: {
		type: String
	}
})

const PhotoModel = mongoose.model('photos', PhotoSchema);

module.exports = PhotoModel;