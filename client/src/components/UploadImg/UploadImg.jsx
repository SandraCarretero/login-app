import { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext';

const UploadImg = () => {
	const [file, setFile] = useState(null);
	const { userLogged, setUserLogged } = useContext(AuthContext);

	return (
		<form onSubmit={e => handleSubmit(e, file, userLogged, setUserLogged)}>
			<input
				type='file'
				name='image'
				onChange={e => handleFileChange(e, setFile)}
			/>
			<input type='submit' value='Update Image' />
		</form>
	);
};

const handleFileChange = (event, setFile) => {
	const file = event.target.files[0];
	setFile(file);
};

const handleSubmit = async (event, file, userLogged, setUserLogged) => {
	event.preventDefault();

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
		setUserLogged({
			...userLogged,
			img: result.img // Suponiendo que el campo de la imagen en la respuesta es 'img'
		});
	} catch (error) {
		console.error('Error uploading file:', error);
	}
};

export default UploadImg;
