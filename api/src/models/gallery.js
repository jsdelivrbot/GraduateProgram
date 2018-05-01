const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const gallerySchema = Schema(
    {
        name: {type: String, required: true, max: 100},
        photos: [{type: Schema.Types.ObjectId, ref: 'photo'}],
    }
);

mongoose.model('gallery', gallerySchema);

exports.getAllGalleries = function (done) {
    mongoose.model('gallery').find( {}, function (err, galleries) {
        if (err) return done(err);
        done(null, galleries);
    });
};


