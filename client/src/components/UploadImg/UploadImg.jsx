import { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext';

const UploadImg = ({ setPreview }) => {
	const [file, setFile] = useState(null);
	const { userLogged, setUserLogged } = useContext(AuthContext);

	return (
		<form
			onSubmit={e =>
				handleSubmit(e, file, userLogged, setUserLogged, setFile, setPreview)
			}
		>
			<input
				type='file'
				name='image'
				onChange={e => handleFileChange(e, setFile, setPreview)}
			/>
			<input type='submit' value='Update Image' disabled={!file} />
		</form>
	);
};

const handleFileChange = (event, setFile, setPreview) => {
	const file = event.target.files[0];
	setFile(file);

	if (file) {
		const reader = new FileReader();
		reader.onloadend = () => {
			setPreview(reader.result);
		};
		reader.readAsDataURL(file);
	}
};

const handleSubmit = async (
	event,
	file,
	userLogged,
	setUserLogged,
	setFile,
	setPreview
) => {
	event.preventDefault();

	if (!file) return;

	const { id } = userLogged;

	const formData = new FormData();
	formData.append('image', file);

	try {
		const response = await fetch(
			`http://localhost:3000/api/users/image/${id}`,
			{
				method: 'PATCH',
				body: formData
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		console.log(result);

		// Actualizar el estado global del usuario
		setUserLogged(prevUserLogged => ({
			...prevUserLogged,
			img: result.img
		}));
		setFile(null);
		setPreview(null);
	} catch (error) {
		console.error('Error uploading file:', error);
	}
};

export default UploadImg;
