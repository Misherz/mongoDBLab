import { get } from 'http';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
// Get single grade entry by id
async function getSingleGrade(req, res) {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let collection = await db.collection('grades');
    let result = await collection.findOne(query);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
}

//Get Student Grade
async function getStudentGrades(req, res) {
    try {
        let query = {student_id: Number(req.params.id)}

        let collection = await db.collection('grades')
    
        let result = await collection.find(query).toArray();
    
        res.json(result)

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
}

async function getClassGrades(req, res) {
    try {
        let query = {class_id: Number(req.params.id)}

        let collection = await db.collection('grades')
    
        let result = await collection.find(query).toArray();
    
        res.json(result)

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
}



//newgrades in DB
async function createGrade(req, res) {
 try {
  let collection = await db.collection('grades')
  let result= await collection.insertOne(req.body);

  res.json(result);
  
 } catch (err) {
    console.error(err)
    res.status(500).json({msg: 'server error'})
 } 
}

export default { getSingleGrade, getClassGrades, getStudentGrades, createGrade };