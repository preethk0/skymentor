import express from 'express'
import { Instructor } from '../models/instructorModel.js';

const router = express.Router();

// new instructor
router.post('/', async (request, response) => {
    try {
        if(!request.body.name) {
            return response.status(400).send({
                message: 'please provide all required fields',
            });
        }

        const newInstructor = {
            name: request.body.name,
            title: request.body.title,
            description: request.body.description,
        }

        const instructor = await Instructor.create(newInstructor);

        return response.status(201).send(instructor);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// get all instructors
router.get('/', async (request, response) => {
    try {
        const instructors = await Instructor.find({});

        return response.status(200).json({
            count: instructors.length,
            data: instructors,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// get single instructor
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const instructor = await Instructor.findById(id);

        return response.status(200).json(instructor);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// update a instructor
router.put('/:id', async (request, response) => {
    try {
        if(!request.body.name) {
            return response.status(400).send({
                message: 'please provide all required fields',
            });
        }

        const { id } = request.params;
        const res = await Instructor.findByIdAndUpdate(id, request.body);

        if(!res) {
            return response.status(404).json({ message: 'instructor not found' });
        }

        return response.status(200).send({ message: 'instructor updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// delete book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const res = await Instructor.findByIdAndDelete(id);

        if(!res) {
            return response.status(404).json({ message: 'instructor not found' });
        }

        return response.status(200).send({ message: 'instructor deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;