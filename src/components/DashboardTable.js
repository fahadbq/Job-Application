import React from 'react'

const DashboardTable = (props) =>{
    const { jobData, filterBy, handleDetails, handleStatus } = props



    const checkApplied = (ele) =>{

        //checking if it's rejected or not 
        if(ele.status === 'applied'){
            return <div>

                <button onClick={() =>{
                    handleStatus(ele._id, 'shortlisted')
                }} className="btn btn-success btn-sm" > Shortlist </button>

                <button onClick={(e) =>{
                    handleStatus(ele._id, 'rejected')
                }} className="btn btn-danger btn-sm" > Reject </button>

            </div>
        } else if (ele.status === 'shortlisted'){
            return (
                <button className="btn btn-success btn-sm" > Shortlisted </button>
            )
        } else if (ele.status === 'rejected'){
            return (
                <button className="btn btn-danger btn-sm" > Rejected </button>
            )
        }
    }

    return (
        <div>
            <h5> List of candidates applied for {jobData} job </h5>
            <table className='table table-hover' >
                <thead>
                    <tr>
                        <th> Names </th>
                        <th> Technical Skills </th>
                        <th> Experience </th>
                        <th> Applied Date </th>
                        <th> View Details </th>
                        <th> Update Application Status </th>
                    </tr>
                </thead>
                <tbody>
                    { filterBy.map((ele) =>{
                            return <tr key={ele._id} >
                            <td> {ele.name} </td>
                            <td> {ele.skills} </td>
                            <td> {ele.experience} </td>
                            <td> {ele.createdAt} </td>
                            <td> <button onClick={() =>{
                                handleDetails(ele._id)
                            }} className="btn btn-secondary btn-sm" > Details </button> </td>
                            <td> {checkApplied(ele)} </td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable