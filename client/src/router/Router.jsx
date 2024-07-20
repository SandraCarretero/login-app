import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoutes from './ProtectedRouter';
import Users from '../pages/Users';
import Profile from '../pages/Profile';
import EditUser from '../pages/EditUser';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
			</Route>

			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/users' element={<Users />} />
			<Route path='/edit-user' element={<EditUser />} />

			<Route element={<ProtectedRoutes />}>
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Router;
