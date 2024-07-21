import styled from 'styled-components';
import { StyledColorImg } from '../profile/profile.styles';

const StyledUserList = styled.section`
	width: 100%;
	margin-top: 50px;
	display: grid;
	align-self: center;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	gap: 25px;
`;

const StyledImg = styled.img`
	width: 80px;
`;

const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 38px;
	align-items: center;
`;

const StyledUserCard = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	width: 100%;
	height: max-content;
	border-radius: 18px;
	text-align: center;
	padding: 20px;
	box-shadow: 1px 1px 5px 1px #f3f3f3;
	transition: all 0.4s;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			outline: 1px solid #d3dbee;
		}
	}
`;

const StyledUserColorImg = styled(StyledColorImg)`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 1px solid lightgray;
	overflow: hidden;
	font-size: 24px;
`;

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
`;

const StyledUserName = styled.p`
	font-size: 18px;
	font-weight: 800;
	margin: 0;
	text-align: left;
`;

const StyledUserEmail = styled.p`
	font-size: 13px;
	color: gray;
	margin: 0;
`;

const StyledIcon = styled.img`
	cursor: pointer;
	width: 25px;
`;

export {
	StyledUserList,
	StyledImg,
	StyledRow,
	StyledUserCard,
	StyledUserColorImg,
	StyledColumn,
	StyledUserName,
	StyledUserEmail,
	StyledIcon
};
