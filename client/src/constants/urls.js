const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}/`;
const API_USERS = URL_BASE + 'api/users';
const AUTH_USERS = URL_BASE + 'auth/register';
const LOGIN_USERS = URL_BASE + 'auth/login';
const TOKEN_VERIFY = URL_BASE + 'auth/verify-token';

export const URLS = {
	API_USERS,
	AUTH_USERS,
	LOGIN_USERS,
	TOKEN_VERIFY
};
