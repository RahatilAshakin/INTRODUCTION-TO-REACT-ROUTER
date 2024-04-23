import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homes from './components/Homes/Homes';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts'
import Users from './components/Users/Users';
import './index.css';
import UsersDetails from './UserDetails/UsersDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <Homes />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
              {
                path:'/about',
                element: <About></About>
              },
              {
                path:'/contact',
                element: <Contacts></Contacts>
              },
              {
                path:'/users',
                loader: ()=> fetch(`https://jsonplaceholder.typicode.com/users`),
                element: <Users></Users>
              },
              {
                path:'/user/:userId',
                loader: ({params})=>fetch(`https://jsonpla
                ceholder.typicode.com/users/${params.userId}`),
                element: <UsersDetails></UsersDetails>
              },
              {path:'/posts',
              loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
              element: <Posts></Posts>
              },
              {
                path:'/post/:postId',
                loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),

                element: <PostDetails></PostDetails>
              }




    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

