import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const navigate = useNavigate()

    const handleGoBack =()=>{
        navigate(-1)
    }

    const post = useLoaderData()
    const {id,title,body    }=post
    return (
        <div className='text-center py-6'>
            <h3>post details about: {id} </h3>
            <h2>post: <br /> {body}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;