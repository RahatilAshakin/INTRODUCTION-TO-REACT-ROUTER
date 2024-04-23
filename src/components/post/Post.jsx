import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {id,title,body    }=post

    const navigate = useNavigate()

    const handleShowDetail=() =>{
        navigate(`/post/${id}`)

    }

    return (
        <div>

                <div className='border-2 p-2 border-yellow-300'>
                    <h1>Id: {post.id}</h1>
                    <h1>Id: {post.title}</h1>
                    <Link className='text-blue-500 bg-slate-700 p-1 rounded-l' to={`/post/${id}`}>post details</Link>
                    <Link className='text-red-500 bg-fuchsia-400 p-1 ml-6' to={`/post/${id}`}><button>Click Here</button></Link>

                    <button className='ml-3' onClick={handleShowDetail}>Show details</button>

                </div>
            
        </div>
    );
};

export default Post;