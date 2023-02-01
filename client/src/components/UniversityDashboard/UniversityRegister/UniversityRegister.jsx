import React from 'react';
import './UniversityRegister.css';
import { useRef, useState, useEffect } from 'react';
import logo from './../../../Assets/ce_logo.png';
import { Link } from 'react-router-dom';
import areas from '../../../res/AreaData';
import  axios from 'axios';
import { Circles,Puff } from 'react-loader-spinner';
// import { Oval } from 'react-loader-spinner';


import {BsCheckLg} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';

const UniversityRegister = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setuser] = useState('');
    const [password, setpassword,] = useState('');
    const [universityName, setuniversityName] = useState('');
    const [location, setlocation] = useState('');
    const [ugcApproval, setugcApproval] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [success, setsuccess,] = useState(false);
    const [error, seterror,] = useState('');
    const [spinner, setspinner] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        seterror('');
    },[user,password]);


    const handleSubmit = (e) =>{
        setspinner(true);
        e.preventDefault();
        axios.post('http://localhost:4500/send',{
            name:universityName,
            username:user,
            password:password,
            ugcstatus:ugcApproval,
            location:location
        }).then((response)=>{
            setspinner(false);
            console.log(response);
            setsuccess(true);
            
        }).catch((err)=>{
            console.log(err);
        });
    }


    

    let Dhaka=Object.keys(areas['Dhaka']); 
    Dhaka=Dhaka.map(function(value){ return value+", Dhaka";}); 
    
    let Sylhet=Object.keys(areas['Sylhet']); Sylhet=Sylhet.map(function(value){ return value+",Sylhet"; }); 
    
    let Chittagong=Object.keys(areas['Chittagong']);
    Chittagong=Chittagong.map(function(value){ return value+", Chittagong"; }); 
    
    let Barisal=Object.keys(areas['Barisal']); 
    Barisal=Barisal.map(function(value){ return value+", Barisal"; }); 
    
    let Rajshahi=Object.keys(areas['Rajshahi']);
    Rajshahi=Rajshahi.map(function(value){ return value+", Rajshahi"; }); 
    
    let Khulna=Object.keys(areas['Khulna']); 
    Khulna=Khulna.map(function(value){ return value+", Khulna"; }); 
    
    let Rangpur=Object.keys(areas['Rangpur']); Rangpur=Rangpur.map(function(value){ return value+", Rangpur"; }); 
    
    
    let Mymensingh=Object.keys(areas['Mymensingh']);
    Mymensingh=Mymensingh.map(function(value){ return value+", Mymensingh"; });


  return (
    <>
    <div className={success===true ?'success_box':'none'} id='success_box'>
        <p><BsCheckLg className='success_icon' /></p>
        
        <div>
            <p>Registration Successful.<br/>Wait for the admin approval.</p>
        </div>
        <p><AiOutlineClose onClick={()=>{ document.getElementById('success_box').style.display = 'none' }} className='close_icon' /></p>
        
    </div>

    <div className='register_box'>
        <img className='logo' src={logo} alt='logo' />
        <p>Sign Up!</p>


   

    <form onSubmit={handleSubmit}>

        
        <p ref={errRef} className={error ? "errmsg" : "offscreen"}>{error}</p>

  
        <input 
            type="text" 
            placeholder="University name" 
            id="university_name"
            autoComplete='off'
            onChange={(e)=> { setuniversityName(e.target.value) } }
            value={universityName} 
            required />
                    
        <input 
            list="browsers" 
            id="location" 
            placeholder="Location" 
            onChange={(e)=> { setlocation(e.target.value) } }
            value={location} 
            required

            />

        <datalist id="browsers">
                {Dhaka.map((x,i)=>{
                return <option key={i+'D'} value={x}></option>
                })}
                {Sylhet.map((x,i)=>{
                return <option key={i+'S'} value={x}></option>
                })}
                {Chittagong.map((x,i)=>{
                return <option key={i+'C'} value={x}></option>
                })}
                {Khulna.map((x,i)=>{
                return <option key={i+'K'} value={x}></option>
                })}
                {Barisal.map((x,i)=>{
                return <option key={i+'B'} value={x}></option>
                })}
                {Rangpur.map((x,i)=>{
                return <option key={i+'R'} value={x}></option>
                })}
                {Mymensingh.map((x,i)=>{
                return <option key={i+'M'} value={x}></option>
                })}
        </datalist>

        <input 
            type='text'
            id='username'
            ref={userRef} 
            placeholder='Username' 
            autoComplete='off'
            onChange={(e)=> { setuser(e.target.value) } }
            value={user}
            required
        />

        <input 
            type='password' 
            placeholder='Password' 
            id='password'
            onChange={(e)=> { setpassword(e.target.value) } }
            value={password}
            required
        />

        <input 
            type="password" 
            placeholder="Confirm Password" 
            id='confirm_password'
            onChange={(e)=> { setconfirmPassword(e.target.value) } }
            value={confirmPassword} 
            required />

        
        <select 
            id="ugcstatus"
            onChange={(e)=> { setugcApproval(e.target.value) } }
            value={ugcApproval} 
        >
            <option key='0' value='UGC Apporval-' selected>UGC Approval</option>
            <option key='1' value="Yes">Yes</option>
            <option key='2' value="No">No</option>
        </select>
        

        {/* <Link className='login_btn' to='/'><button>Login</button></Link> */}
        <a href='#' type='submit' className='register_btn' ><button>Create Account</button></a>
        


        <div  className={spinner===true ? 'visible':'none'}>
        <Circles
            height="50"
            width="50"
            radius={1}
            className='animi_color'
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>

        
        <div className='links'>
            <a>Forgot Password?</a>
            <Link to='/unilogin'>Login here</Link>
        </div>

    </form>
    </div>
    </>
  )
}

export default UniversityRegister