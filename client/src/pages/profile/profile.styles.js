import styled from 'styled-components';

const ProfileContainer = styled.div`
	width: max-content;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

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

const StyledImg = styled.img`
	width: 150px;
`;

const StyledName = styled.span`
	font-size: 25px;
	font-weight: bold;
`;

const StyledEmail = styled.span`
	margin-bottom: 30px;
`;

const StyledLogout = styled.img`
	width: 30px;
	transform: rotate(180deg);
	align-self: flex-start;
	cursor: pointer;
`;

export {
	ProfileContainer,
	StyledColorImg,
	StyledImg,
	StyledName,
	StyledEmail,
	StyledLogout
};
