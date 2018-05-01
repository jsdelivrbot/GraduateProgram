const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const photoSchema = Schema(
    {
        description: {type: String, required: true, max: 100}
    }
);

mongoose.model('photo', photoSchema);

exports.getAllPhotos= function (done) {
    mongoose.model('photo').find( {}, function (err, photos) {
        if (err) return done(err);
        done(null, photos);
    });
};


