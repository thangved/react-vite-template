import createHttp from "@/http/createHttp";
import { BaseService } from "./base.service";

/**
 * @description Service class for CRUD operations
 * - POST: Create
 * - GET: Read (All and Single)
 * - PUT: Update
 * - DELETE: Delete
 * @author Kim Minh Thang
 */
export class CrudService<T = unknown> extends BaseService {
	/**
	 * @description Constructor for the CRUD service
	 * @param resource Resource path for the service
	 * @example new CrudService("users") => http://localhost:3000/users
	 */
	constructor(resource: string) {
		super(createHttp(resource));
	}

	/**
	 * @description Create a new data in the resource
	 * @param data - Data to be created
	 * @returns Created data
	 */
	async create(data: Omit<T, "id">): Promise<T> {
		return await this.http.post("", data);
	}

	/**
	 * @description Get all data from the resource
	 * @returns All data
	 */
	async getAll(): Promise<T[]> {
		return await this.http.get("");
	}

	/**
	 * @description Get a single data from the resource
	 * @param id ID of the data to be fetched
	 * @returns Data with the given ID
	 */
	async get(id: string): Promise<T> {
		return await this.http.get(id);
	}

	/**
	 * @description Update a data in the resource
	 * @param id ID of the data to be updated
	 * @param data Data to be updated
	 * @returns Updated data
	 */
	async update(id: string, data: Partial<T>): Promise<T> {
		return await this.http.put(id, data);
	}

	/**
	 * @description Delete a data from the resource
	 * @param id ID of the data to be deleted
	 */
	async delete(id: string): Promise<void> {
		await this.http.delete(id);
	}
}
