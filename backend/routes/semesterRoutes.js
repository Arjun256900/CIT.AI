import express from "express";
import addSemesterDetails from "../controllers/semesterController.js"; 
const router = express.Router();

// POST route to add semester details
router.post("/semester-details", addSemesterDetails);

module.exports = router;
