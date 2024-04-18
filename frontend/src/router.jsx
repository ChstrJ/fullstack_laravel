import Login from './views/Login';
import Users from './views/Users';
import Register from './views/Register';
import GuestLayout from './components/GuestLayout';
import DefaultLayout from './components/DefaultLayout';
import {createBrowserRouter} from 'react-router-dom';
import UserForm from './views/UserForm';


const router = createBrowserRouter([
    {
        path:"/",
        element: <DefaultLayout/>,
        children: [
            {
                path:"/users",
                element: <Users/>
            },
            {
                path:"/users/new",
                element: <UserForm key="UserCreate"/>
            },
            {
                path:"/users/:id",
                element: <UserForm key="UserCreate"/>
            },
            
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {   
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>,
            }
        ]
    },
])


export default router
