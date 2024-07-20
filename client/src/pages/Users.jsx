import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { deleteData, getData } from '../utils/api';
import { URLS } from '../constants/urls';
import GoBack from '../components/GoBack/GoBack';
import AuthContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { StyledUserCard, StyledUserColoImg } from './users.styles';

const Users = () => {
	const [allUsers, setAllUsers] = useState();
	const { userLogged, setUserLogged } = useContext(AuthContext);

	const navigate = useNavigate();

	useEffect(() => {
		getUsers(setAllUsers);
	}, []);

	if (allUsers)
		return (
			<>
				<h1>USERS</h1>
				<GoBack />
				{allUsers.map(user => (
					<StyledUserCard key={user._id}>
						<StyledUserColoImg $color={user.color}>
							{user.username.charAt(0).toUpperCase()}
						</StyledUserColoImg>
						<h3>{user.username}</h3>
						<p>{user.email}</p>
						{userLogged?.id === user._id && (
							<>
								<button onClick={() => navigate('/edit-user')}>Edit</button>
								<button
									onClick={() =>
										deleteUser(setAllUsers, user, setUserLogged, navigate)
									}
								>
									Delete
								</button>
							</>
						)}
					</StyledUserCard>
				))}
			</>
		);
};

const getUsers = async setAllUsers => {
	const data = await getData(URLS.API_USERS);
	setAllUsers(data);
};

const logout = (setUserLogged, navigate) => {
	Cookies.remove('token');
	setUserLogged(null);
	navigate('/');
};

const deleteUser = async (setAllUsers, user, setUserLogged, navigate) => {
	console.log(user);
	const data = await deleteData(URLS.API_USERS + '/' + user._id);
	setAllUsers(data);

	logout(setUserLogged, navigate);
};

export default Users;
