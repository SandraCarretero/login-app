import styled from 'styled-components';

const StyledLoginContainer = styled.div`
	width: max-content;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border: 1px solid lightgray;
	border-radius: 18px;
	box-shadow: 1px 1px 5px 1px #f3f3f3;
`;

const StyledLoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const StyledInput = styled.input`
	width: 300px;
	height: 40px;
	&:focus {
		outline: none;
	}
`;

const StyledButton = styled.input`
	width: 150px;
	height: 40px;
	background: #849fff;
	color: white;
	border-radius: 10px;
	outline: none;
	border: none;
	cursor: pointer;
`;

export { StyledLoginContainer, StyledLoginForm, StyledInput, StyledButton };
