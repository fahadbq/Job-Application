import React from 'react'
import axios from 'axios'
import FormApplication from './FormApplication'

const FormContainer = (props) =>{
    
    const { jobType, addFormData } =props

    //callback func
    const formSubmission = (formData) =>{
        axios.post(`https://dct-application-form.herokuapp.com/users/application-form`, formData)
            .then((res) =>{
                const result = res.data
                addFormData(result)
            })
            .catch((err) =>{
                alert('post', err.message)
            })
    }

    return (
        <div className='container'>
            < FormApplication formSubmission={formSubmission} jobType={jobType} />
        </div>
    )
}

export default FormContainer