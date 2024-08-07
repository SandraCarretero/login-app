import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import { loginRequest } from '../../utils/auth';
import GoBack from '../../components/GoBack/GoBack';
import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledInput,
	StyledLoginContainer,
	StyledLoginForm
} from './login.styles';

const Login = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<StyledLoginContainer>
			<GoBack />
			<h1>LOGIN</h1>
			<StyledLoginForm
				onSubmit={event => handleSubmit(event, setUserLogged, navigate)}
			>
				<StyledInput type='text' placeholder='Email' name='email' />
				<StyledInput type='text' placeholder='Password' name='password' />
				<StyledButton type='submit' value='Login' disabled={userLogged} />
			</StyledLoginForm>
		</StyledLoginContainer>
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
