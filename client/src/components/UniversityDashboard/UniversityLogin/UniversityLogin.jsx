import React from 'react';
import './UniversityLogin.css';
import logo from './../../../Assets/ce_logo.png';
import { Link,useNavigate,Navigate } from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
import  axios from 'axios';
import { Circles,Puff } from 'react-loader-spinner';
import {BsCheckLg} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import {FaInfoCircle} from 'react-icons/fa';



const UniversityLogin = () => {

   

   
    const errRef = useRef();

    const [user, setuser] = useState('');
    const [password, setpassword,] = useState('');
    const [success, setsuccess,] = useState(false);
    const [error, seterror,] = useState('');
    const [spinner, setspinner] = useState(false);
    const [msg, setmsg] = useState('');


    useEffect(()=>{
        seterror('');
    },[user,password]);




    const auth = localStorage.getItem('logged_university');




    const handleSubmit = async (e) =>{
        setspinner(true);

        e.preventDefault();
        axios.post('http://localhost:4500/getunidata',{
            username:user,
            password:password
        }).then((response)=>{
            setspinner(false);

            if(response.data=='error'){
                setsuccess(true);
                setmsg('No user Found');
            }else if(response.data[0].password===password){
                setsuccess(true);
                setmsg('Login Successful');
                const data = JSON.stringify(response.data);
                localStorage.setItem('logged_university',data);
                <Navigate to='/' />
            }else{
                setsuccess(true);
                setmsg('Incorrect password');
            }
            
            
        }).catch((err)=>{
            console.log(err);
        });
    }


  return auth? <Navigate to='/' /> : (
    <>
    <div className={success===true ?'success_box':'none'} id='success_box'>
        <p><FaInfoCircle className='success_icon' /></p>
        
        <div>
            <p>{msg}</p>
        </div>
        <p><AiOutlineClose onClick={()=>{ document.getElementById('success_box').style.display = 'none' }} className='close_icon' /></p>
        
    </div>

    <div className='login_box'>
        <img className='logo' src={logo} alt='logo' />
        <p>University Login!</p>

        <form onSubmit={handleSubmit} >


            <p ref={errRef} className={error ? "errmsg" : "offscreen"}>{error}</p>

            <input 
                type='text'
                id='username'
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


            {/* <Link className='login_btn' to='/'><button>Login</button></Link> */}
            <a href='#' type='submit' className='login_btn' ><button>Login</button></a>

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
                <a>Don't have account?</a>
                <Link to='/uniregister'>Create One</Link>
            </div>

        </form>
    </div>
    </>
  )
}

export default UniversityLogin