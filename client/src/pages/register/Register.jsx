import { useNavigate } from 'react-router-dom';
import GoBack from '../../components/GoBack/GoBack';
import { registerUser } from '../../utils/auth';
import {
	StyledButton,
	StyledInput,
	StyledRegisterContainer,
	StyledRegisterForm
} from './register.styles';

const Register = () => {
	const navigate = useNavigate();

	return (
		<StyledRegisterContainer>
			<GoBack />
			<h1>REGISTER</h1>
			<StyledRegisterForm onSubmit={e => handleSubmit(e, navigate)}>
				<StyledInput type='text' placeholder='Username' name='username' />
				<StyledInput type='text' placeholder='Email' name='email' />
				<StyledInput type='text' placeholder='Password' name='password' />
				<StyledButton type='submit' value='Register' />
			</StyledRegisterForm>
		</StyledRegisterContainer>
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
