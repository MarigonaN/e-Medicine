import React, {useState, useContext, useEffect} from 'react'
import TodoItem from './TodoItem'
import TodoService from '../services/TodoServices';
import {AuthContext} from '../context/AuthContext'

const Todos = props =>{
    const [todo, setTodo] = useState({name: ""})
    const [todo, setTodo] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

}

export default Todos