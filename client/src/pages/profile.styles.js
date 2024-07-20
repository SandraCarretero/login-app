import styled from 'styled-components';

const StyledColorImg = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${({ $color }) => $color};
	font-size: 50px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 50%;
`;

export { StyledColorImg };
