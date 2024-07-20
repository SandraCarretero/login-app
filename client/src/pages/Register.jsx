import { useNavigate } from 'react-router-dom';
import GoBack from '../components/GoBack/GoBack';
import { registerUser } from '../utils/auth';

const Register = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1>REGISTER</h1>
			<GoBack />
			<form onSubmit={e => handleSubmit(e, navigate)}>
				<input type='text' placeholder='Username' name='username' />
				<input type='text' placeholder='Email' name='email' />
				<input type='text' placeholder='Password' name='password' />
				<input type='submit' value='Register' />
			</form>
		</>
	);
};

const handleSubmit = async (event, navigate) => {
	event.preventDefault();
	const { username, email, password } = event.target;

	if (!username.value || !email.value || !password.value) return;

	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value
	};

	const serverMessage = await registerUser(newUser);
	console.log(serverMessage);

	navigate('/');
};

export default Register;
