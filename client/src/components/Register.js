import React, { useState, useRef, useEffect} from 'react';
import AuthServices from '../services/AuthService'
import Message from './Message'
import { AuthContext } from '../context/AuthContext'


const Register = props => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
   let timerID = useRef(null);

   useEffect(()=>{
       return()=>{
           clearTimeout(timerID);
       }
   }, []);

    const onChange = e => {
      
        setUser({...user, [e.target.name]: e.target.value})
       
    }

    const resetForm = () => {
        setUser({username: "", password: "", role : ""})
    }
    const onSubmit = e =>{
        e.preventDefault();
        AuthServices.register(user).then(data=>{
            const {message} = data;
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                }, 2000)
            }
        })
    }
    return (

        <div>
            <form onSubmit={onSubmit}>
                <h3>Please register</h3>
                <label htmlFor="username" className="sr-only"> Username: </label>
                <input type="text"
                    name="username"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Username" />
                <label htmlFor="password" className="sr-only"> Password: </label>
                <input type="password"
                    name="password"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}
export default Register;