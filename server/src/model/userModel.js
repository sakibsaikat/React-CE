import mongo from 'mongoose';

let userSchema = new mongo.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required:true
    }
});

const user = mongo.model('user', userSchema);
export default user;


