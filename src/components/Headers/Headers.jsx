import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Headers = () => {
    return (
        <div>
            <div>
              

            <nav className='text-xl  text-center my-6'>
                <NavLink className='hover:bg-orange-400 p-2 rounded-xl' to="/">Home</NavLink>
                
                <NavLink className='hover:bg-orange-400 p-2 rounded-xl'  to="/about">About</NavLink>
                <NavLink className='hover:bg-orange-400 p-2 rounded-xl' to="/contact">Contact Us</NavLink>
                <NavLink className='hover:bg-orange-400 p-2 rounded-xl' to="/users">Users</NavLink>
                <NavLink className='hover:bg-orange-400 p-2 rounded-xl' to="/posts">posts</NavLink>
                

            </nav>

            </div>
        </div>
    );
};

export default Headers;