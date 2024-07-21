import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Register from '../pages/Register';
import ProtectedRoutes from './ProtectedRouter';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Login from '../pages/login/Login';
import EditUser from '../pages/editUser/EditUser';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
			</Route>

			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/edit-user' element={<EditUser />} />

			<Route element={<ProtectedRoutes />}>
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Router;
