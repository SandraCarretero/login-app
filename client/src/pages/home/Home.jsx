import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { deleteData, getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import AuthContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import {
	StyledColumn,
	StyledIcon,
	StyledRow,
	StyledUserCard,
	StyledUserColorImg,
	StyledUserEmail,
	StyledUserList,
	StyledUserName
} from './home.styles';

const Home = () => {
	const [allUsers, setAllUsers] = useState();
	const { userLogged, setUserLogged } = useContext(AuthContext);

	const navigate = useNavigate();

	useEffect(() => {
		getUsers(setAllUsers);
	}, []);

	if (allUsers)
		return (
			<StyledUserList>
				{allUsers.map(user => (
					<StyledUserCard key={user._id}>
						<StyledRow>
							<StyledUserColorImg $color={user.color}>
								{user.username.charAt(0).toUpperCase()}
							</StyledUserColorImg>
							<StyledColumn>
								<StyledUserName>{user.username}</StyledUserName>
								<StyledUserEmail>{user.email}</StyledUserEmail>
							</StyledColumn>

							{userLogged?.id === user._id && (
								<StyledColumn>
									<StyledIcon
										onClick={() => navigate('/edit-user')}
										src='/images/edit-icon.svg'
										alt='Delete'
									/>
									<StyledIcon
										onClick={() =>
											deleteUser(setAllUsers, user, setUserLogged, navigate)
										}
										src='/images/delete-icon.svg'
										alt='Edit'
									/>
								</StyledColumn>
							)}
						</StyledRow>
					</StyledUserCard>
				))}
			</StyledUserList>
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

export default Home;
