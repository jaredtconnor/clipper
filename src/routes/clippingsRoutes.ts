import express, { Router } from 'express'; 
import { getClippings, createClipping } from '../controllers/clippingsController';

const router = express.Router(); 

router.get('/clippings', getClippings); 
router.post('/clippings', createClipping); 

export default router;
