import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import {
	StyledButton,
	StyledHeader,
	StyledMenu,
	StyledNav
} from './header.styles';

const Header = () => {
	const { userLogged } = useContext(AuthContext);

	return (
		<StyledHeader>
			{userLogged && <h3>Hello {userLogged.username}!</h3>}
			<StyledNav>
				<StyledMenu>
					{!userLogged && (
						<>
							<StyledButton>
								<Link to='/login'>Login</Link>
							</StyledButton>
							<StyledButton>
								<Link to='/register'>Register</Link>
							</StyledButton>
						</>
					)}
					{userLogged && (
						<StyledButton>
							<Link to='/profile'>Profile</Link>
						</StyledButton>
					)}
				</StyledMenu>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
