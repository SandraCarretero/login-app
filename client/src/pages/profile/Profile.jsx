import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import AuthContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import {
	StyledProfileContainer,
	StyledColorImg,
	StyledEmail,
	StyledImg,
	StyledLogout,
	StyledName
} from './profile.styles';
import UploadImg from '../../components/UploadImg/UploadImg';
import GoBack from '../../components/GoBack/GoBack';

const Profile = () => {
	const [preview, setPreview] = useState(null);
	const { userLogged, setUserLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<StyledProfileContainer>
			<GoBack />
			{!preview && !userLogged.img && (
				<StyledColorImg $color={userLogged.color}>
					{userLogged.username.charAt(0).toUpperCase()}
				</StyledColorImg>
			)}
			{!preview && userLogged.img && (
				<StyledImg src={userLogged.img} alt={userLogged.username} />
			)}
			{preview && <StyledImg src={preview} alt='Preview' />}
			<StyledName>{userLogged.username}</StyledName>
			<StyledEmail>{userLogged.email}</StyledEmail>
			<UploadImg setPreview={setPreview} />
			<StyledLogout
				onClick={() => logout(setUserLogged, navigate)}
				src='/images/logout.svg'
				alt='Back'
			/>
		</StyledProfileContainer>
	);
};

const logout = (setUserLogged, navigate) => {
	Cookies.remove('token');
	setUserLogged(null);
	navigate('/');
};

export default Profile;
