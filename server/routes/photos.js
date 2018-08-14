const express = require('express');
const router = express.Router();
const Photo = require('../models/photo-model');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname));
    });
  }
});
const upload = multer({ storage });

router.post('/', upload.array('photos'), (req, res, next) => {
	const promises = req.files.map(file => {
		const newPhoto = new Photo({
			path: file.filename
		})
		return newPhoto.save();
	});

	Promise.all(promises)
	.then(doc => {
		console.log("doc: ", doc);	
		res.json(doc);
	}).catch(err => next(err))
})

/* GET photos page. */
router.get('/', (req, res) => {
	Photo.find({}, 'path descr', (err, photos) => {
		if (err) {
			res.next(err);
		} else {
			res.json({ photos: photos})
		}
	})
})

router.delete('/:id', (req, res) => {
	Photo.remove({ _id: req.params.id}, err => {
		if (err) {
			res.sendStatus(500)
		} else {
			res.sendStatus(200)
		}
	})
})


module.exports = router;