import mongoose from 'mongoose';

const instructorSchema = mongoose.Schema(
    {
     name: {
        type: String,
        required: true,
     },
     title: {
        type: String,
     },
     description: {
        type: String,
     },
    },
    {
        timestamps: true,
    }
);

export const Instructor = mongoose.model('Instructor', instructorSchema);