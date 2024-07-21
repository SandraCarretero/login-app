import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoutes from './ProtectedRouter';
import EditUser from '../pages/EditUser';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';

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
