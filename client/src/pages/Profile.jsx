import { useContext } from 'react';
import Cookies from 'js-cookie';
import AuthContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { StyledColorImg } from './profile.styles';
import UploadImg from '../components/UploadImg/UploadImg';

const Profile = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log(userLogged);

	return (
		<>
			<h1>{userLogged.username}´s profile</h1>
			{!userLogged.img && (
				<StyledColorImg $color={userLogged.color}>
					{userLogged.username.charAt(0).toUpperCase()}
				</StyledColorImg>
			)}

			{userLogged.img && <img src={userLogged.img} alt={userLogged.username} />}

			<p>{userLogged.email}</p>
			<UploadImg />
			<button onClick={() => logout(setUserLogged, navigate)}>Log Out</button>
		</>
	);
};

const logout = (setUserLogged, navigate) => {
	Cookies.remove('token');
	setUserLogged(null);
	navigate('/');
};

export default Profile;
