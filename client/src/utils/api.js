import { HEADERS } from '../constants/headers';
import { METHODS } from '../constants/methods';
import { fetchData } from './fetchData';

export const getData = async url => {
	const data = await fetchData(url, { method: METHODS.GET });
	return data;
};

export const postData = async (url, body) => {
	const data = await fetchData(url, {
		method: METHODS.POST,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

// utils/api.js
export const patchData = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error in patchData:', error);
		throw error;
	}
};

export const deleteData = async url => {
	const data = await fetchData(url, {
		method: METHODS.DELETE,
		headers: HEADERS
	});
	return data;
};
