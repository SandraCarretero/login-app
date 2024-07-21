import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import GoBack from '../../components/GoBack/GoBack';
import { patchData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledEditContainer,
	StyledEditForm,
	StyledInput
} from './editUser.styles';

const EditUser = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);

	const navigate = useNavigate();

	if (userLogged)
		return (
			<StyledEditContainer>
				<h1>Edit User</h1>
				<GoBack />
				<StyledEditForm
					onSubmit={e => editUser(e, userLogged, setUserLogged, navigate)}
				>
					<StyledInput
						type='text'
						defaultValue={userLogged.username}
						name='username'
					/>
					<StyledInput
						type='text'
						defaultValue={userLogged.email}
						name='email'
					/>
					<StyledButton type='submit' value='Edit User' />
				</StyledEditForm>
			</StyledEditContainer>
		);
};

const editUser = async (event, userLogged, setUserLogged, navigate) => {
	event.preventDefault();

	const { username, email } = event.target;

	await patchData(URLS.USER_API + '/' + userLogged.id, {
		username: username.value,
		email: email.value
	});

	setUserLogged({
		...userLogged,
		username: username.value,
		email: email.value
	});
	navigate('/');
};

export default EditUser;
