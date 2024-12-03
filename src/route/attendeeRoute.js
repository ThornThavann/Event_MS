import express  from 'express';
const router = express.Router();
import createattendee from '../controllers/attendeeController';
router.post("/attendee", createattendee);
 



