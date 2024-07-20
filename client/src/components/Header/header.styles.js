import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
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

export { StyledHeader, StyledNav, StyledMenu };
