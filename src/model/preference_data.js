var mangoose = require('mongoose');
var Schema = mangoose.Schema;

var preferenceDataSchema = new Schema({
    imageUrl : {
        type : String,
        required : true,
    },
    title : {
        type: String,
        required : true,
    },
    rating : {
        type: String,
        required : true,
    },
    decription: {
        type : String,
        required : true,
    },
    food : [
        {type: String,
        required : true}
    ],
    travelling : [
        {
            type: String,
            required : true,
        }
    ],
    accomodation : [
        {type: String,
        required : true}
    ]
});

module.exports = mangoose.model('preference_data', preferenceDataSchema)