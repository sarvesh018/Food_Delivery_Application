const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now
    }
});
//data is inserted with the help of model (Wrapper for schema)
module.exports = mongoose.model('user', UserSchema)