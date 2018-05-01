const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const eventSchema = Schema(
    {
        name: {type: String, required: true, max: 100},
        date: {type: Date},
        days: [{type: Schema.Types.ObjectId, ref: 'day'}],
    }
);

mongoose.model('event', eventSchema);

exports.getAllEvents = function (done) {
    mongoose.model('event').find( {}, function (err, events) {
        if (err) return done(err);
        done(null, events);
    });
};


