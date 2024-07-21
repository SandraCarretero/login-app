import { useContext } from 'react';
import Cookies from 'js-cookie';
import AuthContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import {
	ProfileContainer,
	StyledColorImg,
	StyledEmail,
	StyledImg,
	StyledLogout,
	StyledName
} from './profile.styles';
import UploadImg from '../../components/UploadImg/UploadImg';
import GoBack from '../../components/GoBack/GoBack';

const Profile = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log(userLogged);

	return (
		<ProfileContainer>
			<GoBack />
			{!userLogged.img && (
				<StyledColorImg $color={userLogged.color}>
					{userLogged.username.charAt(0).toUpperCase()}
				</StyledColorImg>
			)}
			{userLogged.img && (
				<StyledImg src={userLogged.img} alt={userLogged.username} />
			)}
			<StyledName>{userLogged.username}</StyledName>
			<StyledEmail>{userLogged.email}</StyledEmail>
			<UploadImg />
			<StyledLogout
				onClick={() => logout(setUserLogged, navigate)}
				src='/images/logout.svg'
				alt='Back'
			/>
		</ProfileContainer>
	);
};

const logout = (setUserLogged, navigate) => {
	Cookies.remove('token');
	setUserLogged(null);
	navigate('/');
};

export default Profile;
