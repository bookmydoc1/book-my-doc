import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true,
        trim: true,
    },
    clinicName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export default mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);
