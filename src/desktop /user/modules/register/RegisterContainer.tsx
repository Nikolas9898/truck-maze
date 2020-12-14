import React, { useState } from 'react';
import RegisterContainerStyle from './RegisterContainerStyle.module.css'

const RegisterContainer = () => {


    const [counter,setCounter] = useState(0)
    const [message,setMessage]=useState("")


    const increase = () =>{


setCounter(counter+1)
        

    }


    const decrease = ()=>{


        if(counter<=0){

            setMessage("Ne moje poveche")

        }else {
            setCounter(counter-1)

        }
    }


    return (
        <div className={RegisterContainerStyle.form_wrapper}>
            <label>
                Username
            </label>
            <input placeholder="Username"/>
            <label>
                Email
            </label>
            <input/><label>
                Password
            </label>
            <input/>
{counter}

{message}


            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    );
};


export default RegisterContainer;