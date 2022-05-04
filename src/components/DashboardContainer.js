import React, { useState } from 'react'
import axios from 'axios'
import DashboardTable from './DashboardTable'


const DashboardContainer = (props) => {
    const { users, jobType } = props

    const [ jobData, JobData ] = useState('')
    const [ filterBy, setFilterBy ] = useState(users)

    //Filtering data callback func
    const handleClick = (titleData) =>{
        JobData(titleData)
        const result = users.filter((user) =>{
            return user.jobTitle === titleData
        })
        console.log(result)
        setFilterBy(result)
    }
    
    //comm with DashboardTable component for Pop-up modal
    const handleDetails = (id) =>{
        axios.get(`https://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((res) =>{
                const result = res.data
                alert(`${result.name} profile
                    Contact Number: ${result.phone}
                    Email: ${result.email}
                    Skills: ${result.skills}
                    Experience: ${result.experience}
                `)
                
            })
            .catch(err =>{ console.log(err.message) })
        
    }

    //Updating Status response on API
    const handleStatus = (id, status) =>{

        const updateData = {
            status: status
        }

        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`, updateData)
            .then((res) =>{
                const result = res.data
                console.log('update success', result)

                //updating in UI
                const updateState = filterBy.map((update) =>{
                    if( update._id === id ){
                        return {...result}
                    } else {
                        return update
                    }
                })
                setFilterBy(updateState)
            })
            .catch(err =>{ console.log('update failed',err.message) })
    }
    
    return (
        <div > 
            <h2> Admin Dashboard - { users.length } </h2> <br />

            <div className='row'>
            { jobType.map((ele, i) =>{
                return ( 
                    <div key={i} className='col-md-3'>
                    <button key={i} value={ele} onClick={() =>{
                        handleClick(`${ele}`)
                    }} className ="btn btn-info" > {ele} </button>
                </div>
               )  
            })}  
            </div> <br />

            <DashboardTable jobData={jobData} filterBy={filterBy} handleDetails={handleDetails} handleStatus={handleStatus} />
        </div>
    )
}

export default DashboardContainer