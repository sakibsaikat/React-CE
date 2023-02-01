import express  from 'express';
import multer from 'multer';
import path from 'path';
const router = express.Router();
import {sendUniversityDataAPI, getUniversityDataAPI} from './../src/controller/University/UniversityPortal/UniversityController.js';


router.get('/',(req,res)=>{
    res.send("WOW");
});

router.post('/send',sendUniversityDataAPI);
router.post('/getunidata',getUniversityDataAPI)




export default router