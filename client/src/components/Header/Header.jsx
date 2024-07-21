import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { StyledHeader, StyledMenu, StyledNav } from './header.styles';

const Header = () => {
	const { userLogged } = useContext(AuthContext);

	return (
		<StyledHeader>
			{userLogged && <h3>Hello {userLogged.username}!</h3>}
			<StyledNav>
				<StyledMenu>
					{!userLogged && (
						<>
							<li>
								<Link to='/login'>Login</Link>
							</li>
							<li>
								<Link to='/register'>Register</Link>
							</li>
						</>
					)}
					{userLogged && (
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					)}
				</StyledMenu>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
