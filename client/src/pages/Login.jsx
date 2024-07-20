import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import { loginRequest } from '../utils/auth';
import GoBack from '../components/GoBack/GoBack';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<>
			<h1>LOGIN</h1>
			<GoBack />
			<form onSubmit={event => handleSubmit(event, setUserLogged, navigate)}>
				<input type='text' placeholder='Email' name='email' />
				<input type='text' placeholder='Password' name='password' />
				<input type='submit' value='Login' disabled={userLogged} />
			</form>
		</>
	);
};

const handleSubmit = async (event, setUserLogged, navigate) => {
	event.preventDefault();

	const { email, password } = event.target;

	if (!email.value || !password.value) return;

	const loginData = {
		email: email.value,
		password: password.value
	};

	const serverMessage = await loginRequest(loginData, setUserLogged);
	console.log(serverMessage);

	navigate('/');
};

export default Login;
