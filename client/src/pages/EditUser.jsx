import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import GoBack from '../components/GoBack/GoBack';
import { patchData } from '../utils/api';
import { URLS } from '../constants/urls';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);

	const navigate = useNavigate();

	if (userLogged)
		return (
			<>
				<h1>Edit User</h1>
				<GoBack />
				<form onSubmit={e => editUser(e, userLogged, setUserLogged, navigate)}>
					<input
						type='text'
						defaultValue={userLogged.username}
						name='username'
					/>
					<input type='text' defaultValue={userLogged.email} name='email' />
					<input type='submit' value='Edit User' />
				</form>
			</>
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
	navigate('/users');
};

export default EditUser;
