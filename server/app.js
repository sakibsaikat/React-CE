import express from 'express';
import cors from 'cors';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import UniversityRouter from './routes/UniversityPanelRouter.js';
const port = 4500;
import './src/db/conn.js';


app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.use('/',UniversityRouter);


// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


app.listen(port,(err)=> {
    if(!err){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console("Error! Server down.");
    }
});