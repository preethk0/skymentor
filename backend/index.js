import express from 'express'
import { PORT, mongoURL } from './config.js'
import mongoose from 'mongoose'
import { Instructor } from './models/instructorModel.js';
import instructorRoute from './routes/instructorRoutes.js';
import cors from 'cors';

const app = express();

// middleware parsing request body
app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome');
});

app.use('/instructors', instructorRoute);

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });