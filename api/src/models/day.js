const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const daySchema = Schema(
    {
        name: {type: String, required: true, max: 100},
        galleries: [{type: Schema.Types.ObjectId, ref: 'gallery'}]
    }
);

mongoose.model('day', daySchema);

exports.getAllDays = function (done) {
    mongoose.model('day').find( {}, function (err, days) {
        if (err) return done(err);
        done(null, days);
    });
};


