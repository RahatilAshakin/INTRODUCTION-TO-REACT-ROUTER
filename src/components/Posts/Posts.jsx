
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {


    const posts = useLoaderData();
    console.log(posts);



    return (
        <div className='text-center border-2 border-blue-700'>
                        <h2 className='text-2xl capitalize'>post: {posts.length}</h2>
       

                        <div className="
         grid md:grid-cols-3 text-left p-2 sm:text-center md:text-left lg:text-left sm:grid-cols-1 lg:grid-cols-3
          gap-4 "> 


                                {
                                    posts.map(post=> <Post key={post.id} post={post} 
                                    
                                    ></Post>)
                                }


                        </div>
        
        </div>
    );
};

export default Posts;