import React, { useState } from 'react'

const FormApplication = (props) =>{
    const { formSubmission, jobType } = props

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ contact, setContact ] = useState('')
    const [ profession, setProfession ] = useState('')
    const [ experience, setExperience ] = useState('')
    const [ skills, setSkills ] = useState('')

    const handleChange = (e) =>{
        const readName = e.target.name
            if(readName === 'name' ){
                setName(e.target.value)
            } else if (readName === 'email') {
                setEmail(e.target.value)
            } else if (readName === 'contact') {
                setContact(e.target.value)
            } else if (readName === 'profession') {
                setProfession(e.target.value)
            } else if (readName === 'experience') {
                setExperience(e.target.value)
            } else if (readName === 'skills') {
                setSkills(e.target.value)
            }
    }

    const handleSubmit= (e) =>{
        e.preventDefault()

        const formData = {
            name: name,
            email: email,
            phone: contact,
            jobTitle: profession,
            experience: experience,
            skills: skills
        }
        formSubmission(formData)

        setName('')
        setEmail('')
        setContact('')
        setProfession('')
        setExperience('')
        setSkills('')


    }

    return (
        <div className='shadow p-3 mb-5 bg-white rounded' style={{maxWidth: "440px"}}>
            <form onSubmit={handleSubmit} >
                <label> Full Name </label>
                <input type='text' 
                    value={name} 
                    onChange={handleChange} 
                    name='name' 
                    className='form-control'
                /><hr />

                <label> Email Address </label>
                <input type='text' 
                    value={email} 
                    onChange={handleChange} 
                    name='email' 
                    className='form-control'
                /> <hr />

                <label> Contact Number </label>
                <input type='text' 
                    value={contact} 
                    onChange={handleChange} 
                    name='contact' 
                    className='form-control'
                /> <hr />

                <label> Applying for Job </label>
                <select value={profession} onChange={handleChange} name='profession' className='form-select'> 
                    <option value='' > ---Select--- </option>
                    
                    { jobType.map((ele, i) =>{
                        return <option key={i} value={ele} > {ele} </option>
                    }) }
                </select> <hr />

                <label> Experience </label>
                <input text='text' 
                    value={experience} 
                    onChange={handleChange} 
                    name='experience' 
                    className='form-control'
                /> <hr />

                <label> Technical Skills </label>
                <textarea value={skills} 
                    onChange={ handleChange } 
                    name='skills' 
                    className='form-control'
                >
                </textarea> <hr />
                
                <input 
                    type='submit' 
                    value='Send Application' 
                    className="btn btn-primary btn-sm" 
                />
            </form>
        </div>
    )
}

export default FormApplication