import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
`;

const StyledMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

const StyledButton = styled.li`
	background: #849fff;
	color: white;
	padding: 10px 15px;
	border-radius: 10px;
	cursor: pointer;
`;

export { StyledHeader, StyledNav, StyledMenu, StyledButton };
