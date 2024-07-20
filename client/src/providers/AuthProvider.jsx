import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import AuthContext from '../contexts/authContext';
import { verifyToken } from '../utils/auth';

const AuthProvider = ({ children }) => {
	const [userLogged, setUserLogged] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(userLogged);

	useEffect(() => {
		checkLogin(setUserLogged, setLoading);
	}, []);

	return (
		<AuthContext.Provider value={{ userLogged, setUserLogged, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

const checkLogin = async (setUserLogged, setLoading) => {
	const cookies = Cookies.get();

	if (!cookies.token) {
		setLoading(false);
		return;
	}

	try {
		const data = await verifyToken();

		if (!data) {
			setLoading(false);
			return;
		}

		setUserLogged(data);
		setLoading(false);
	} catch (err) {
		console.log(err);
	}
};

export default AuthProvider;
