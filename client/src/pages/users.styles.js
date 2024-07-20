import styled from 'styled-components';
import { StyledColorImg } from './profile.styles';

const StyledUserCard = styled.article`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const StyledUserColoImg = styled(StyledColorImg)`
	width: 50px;
	height: 50px;
	font-size: 24px;
`;

export { StyledUserCard, StyledUserColoImg };
