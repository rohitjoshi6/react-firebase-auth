/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import {auth} from "../../firebase";
import styles from './signUp.module.css';
import InputControl from './../InputControl/inputControl';


const signup = () => {
  const navigate=useNavigate();
  const [values, setValues]=useState({
    name:"",
    email:"",
    pass:"",
  })

  const[errorMsg,seterrorMsg]=useState("");
  const[submitButtonDisabled, setsubmitButtonDisabled]=useState(false);

  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.pass){
      seterrorMsg("Fill all fields");
      return ;
    }
    seterrorMsg("");
    //console.log(values);
    setsubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.pass).then(
      async(res)=>{
        setsubmitButtonDisabled(false)
        const user=res.user;
        await updateProfile(user,{
          displayName:values.name
        });
        //console.log(user);
        navigate("/");
      })
      .catch(err=>
        console.log(err));
  }
  
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>SignUp</h1>

            <InputControl label="Name" placeholder="Name"
            onChange={(e)=>setValues((prev)=>({...prev,name: e.target.value}))}/>
            <InputControl label="Email" placeholder="Enter email"
            onChange={(e)=>setValues((prev)=>({...prev,email: e.target.value}))} 
            />
            <InputControl label="Password" placeholder="Enter Password"
            onChange={(e)=>setValues((prev)=>({...prev,pass: e.target.value}))}
            />

            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button onClick={handleSubmission} disabled={submitButtonDisabled}>Submit</button>
              <p>Already have account?{" "} 
                <span>
                <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
        </div>
    </div>
  )
}

export default signup;