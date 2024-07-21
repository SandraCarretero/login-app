import { useNavigate } from 'react-router-dom';
import { StyledBack } from './goBack.styles';

const GoBack = () => {
	const navigate = useNavigate();

	return <StyledBack onClick={() => navigate('/')}src='/images/arrow.svg'
	alt='Back'
/>;
};

export default GoBack;
