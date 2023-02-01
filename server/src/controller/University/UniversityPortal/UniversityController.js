import mongo from 'mongoose';
import UniversityModel from './../../../model/universityModel.js';



const sendUniversityDataAPI = async (req,res)=>{
    try{
        const {name,username,password,ugcstatus,location} = req.body;
        const ac = req.body.name;
        let acrnym=ac[0];
        for(let x=1;x<ac.length;x++){
           if(ac[x]==" "){
            acrnym+=ac[x+1];
           }
        }
        acrnym+="36";
        const university_id = acrnym;
        const status = "pending";
        
        const university = await new UniversityModel({
            university_id,name,username,password,ugcstatus,location,status
        }).save();
        res.send("sent");

    }catch(err){
        console.log(err);
    }

}


const getUniversityDataAPI = async (req,res)=>{
    try{
        const unidata = await UniversityModel.find({username:req.body.username,status:"approved"});
        console.log(unidata);
        
        if(unidata.length != 0 ){
            console.log('hi');
            const data = JSON.stringify(unidata);
            res.send(data);
        }else{
            console.log("hello");
            res.send('error')
        }
        
    }catch(err){
        console.log(err);
    }
}

export {sendUniversityDataAPI, getUniversityDataAPI }
