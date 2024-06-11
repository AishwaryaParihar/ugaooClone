import React, { useEffect, useState } from 'react'
import SummaryApi from '../../../common/Index'
import moment from 'moment'
import ChangeUserRole from './ChangeUserRole'

const AllUsers = () => {

  const [allUser, setAllUsers] = useState([])

  console.log(allUser)

 const fetchAllUsers = async()=>{
  const fetchData = await fetch(SummaryApi.allUser.url,{
    method : SummaryApi.allUser.method,
    credentials : 'include',
  })

  const dataResponse = await fetchData.json()

  if(dataResponse.success){
    setAllUsers(dataResponse.data)
  }

  if(dataResponse.error){
    toast.error(dataResponse.message)
  }

 
 }

  useEffect(() =>{
    fetchAllUsers()
  },[] )

  return (
    <>
  <div className="">
  <table className='table table-striped userTable text-center w-100'>
      <thead>
       <tr>
       <th>Sr.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Created Date</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody>
        {
           allUser.map((el,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{el?.name}</td>
                <td>{el?.email}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.createdAt).format('LL')}</td>
                <td>
                  <button className='border-0 bg-transparent'>
                  <i class="fa-regular fa-pen-to-square p-2 text-success"></i>
              
                  </button>
                </td>
              </tr>
            )
           })
        }
      </tbody>
    </table>

   <ChangeUserRole />

  </div>
    </>
  )
}

export default AllUsers