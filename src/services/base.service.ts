import { AxiosInstance } from "axios";

/**
 * Base service class to be extended by other services
 * @author Kim Minh Thang
 */
export class BaseService {
	/**
	 * @description Constructor for the base service
	 * @param http AxiosInstance to be used for making requests
	 */
	constructor(protected readonly http: AxiosInstance) {}
}
