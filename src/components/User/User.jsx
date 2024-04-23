import React from 'react';
import { Link } from 'react-router-dom';



const User = ({user}) => {



    const {id, name, email, phone, address}=user




    return (
        <div className='border-yellow-300 p-4 mt-6 text-2xl rounded-2xl border-2'>
        <div className=''>
          <h2 className='capitalize'><span className='text-green-600 font-bold'>name: </span> {name}</h2>
          <p><span className='text-green-600 font-bold'>Email:</span> {email}</p>
        
        <Link  className='text-blue-500' to={`/user/${id}`}>Show Detail's</Link>
       
        </div>
      </div>
      
    );
};

export default User;