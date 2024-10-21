// Imports
import express from 'express';
import gradesCTL from '../controllers/gradeController.mjs'


const router = express.Router();

//get gradesby ID
router.route('/:id').get(gradesCTL.getSingleGrade);

//get studentbyID
router.get('/student/:id', gradesCTL.getStudentGrades);

//get classById
router.get('/class/:id', gradesCTL.getClassGrades);


// Add new grade too DB
router.post('/', gradesCTL.createGrade)
// Routes go here
export default router;

