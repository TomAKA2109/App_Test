import { create } from 'domain';
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
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
    // re_password: {
    //     type: String,
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    }
});

const UserModel = mongoose.model('user', UserSchema);
export default UserModel;