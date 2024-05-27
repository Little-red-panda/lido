import axios, {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';

type DetailMessageType = {
	type: string;
	message: string;
};

const StatusCodeMapping: Record<number, boolean> = {
	[StatusCodes.NOT_FOUND]: true,
	[StatusCodes.BAD_REQUEST]: true,
	[StatusCodes.UNAUTHORIZED]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
	!!StatusCodeMapping[response.status];

const BASE_URL = 'https://dev.api.lidofon.com';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: BASE_URL,
		timeout: REQUEST_TIMEOUT,
	});

	api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		const token = getToken();

		if (token && config.headers) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		return config;
	});

	api.interceptors.response.use(
		(response) => response,
		(error: AxiosError<DetailMessageType>) => {
			if (error.response && shouldDisplayError(error.response)) {
				const detailMessage = error.response.data;
				console.log('detailMessage: ', detailMessage);
			}

			throw error;
		}
	);

	return api;
};

