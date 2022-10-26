import {createBrowserRouter} from 'react-router-dom';
import Blog from '../../Components/Blog/Blog';
import Checkout from '../../Components/Checkout/Checkout';
import Courses from '../../Components/Courses/Courses';
import FAQ from '../../Components/FAQ/FAQ';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import SingleCourse from '../../Components/SignleCourse/SingleCourse';
import Main from '../../Layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/premium/${params.id}`)
            }
        ]
    }
])