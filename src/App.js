import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import FormContainer from './FormContainer'
import DashboardContainer from './DashboardContainer'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) =>{
    const [ users, setUsers ] = useState([])
    //profession type for job application
    const jobType= ['Front-End Developer', 'Node.js Developer', 'MEAN Stack Developer', 'FULL Stack Developer']

    useEffect(() =>{
        axios.get(`https://dct-application-form.herokuapp.com/users/application-forms`)
            .then((res) =>{
                setUsers(res.data)
            })
            .catch((err) =>{
                alert('read', err.message)
            })
    }, [])

    const addFormData = (formData) =>{
        setUsers([ ...users, formData])
    }

    return (
        <div className='container'>
            <h4> <Link to='/' > Home </Link> | <Link to='/dashboard' > Dashboard </Link> | <Link to='/form' > Form </Link> </h4> <br />

            <Route path='/' component={Home} exact={true} />
            <Route path='/dashboard' render={ (props) =>{
                return < DashboardContainer jobType={jobType} users={users} {...props} />
            }}/>
            <Route path='/form' render={ (props) =>{
                return <FormContainer jobType={jobType} addFormData={addFormData} {...props} />
            } } />
        </div>
    )
}

export default App