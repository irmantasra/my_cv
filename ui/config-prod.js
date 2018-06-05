export const apiHostUrl = 'https://storm-coders-visitor-log-api.azurewebsites.net/api/';

export const apiSitesUrl = `${apiHostUrl}sites/`;

export const apiUsersUrl = `${apiHostUrl}users/`;

export const apiTokenUrl = `${apiHostUrl}token/`;

export const apiVisitationsUrl = `${apiHostUrl}visitations/`;

export const apiPreregisteredUrl = `${apiHostUrl}visitations/preregistered/`;

export const headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
	'Access-Control-Allow-Origin': '*'
};
