/**
 * @description Service for managing the access token
 * - Get and set the access token
 * - Save the access token to the local storage
 * - Get the access token from the local storage
 * - Remove the access token from the local storage
 * @author Kim Minh Thang
 */
export class TokenService {
	/**
	 * @description Constructor for the token service
	 * @param _accessTokenName Name of the access token in the local storage
	 * @param _accessToken Access token
	 */
	constructor(
		private readonly _accessTokenName = "app:token:access",
		private _accessToken: string = "",
	) {
		// Get the access token from the local storage if it exists
		if (typeof window !== "undefined") this._accessToken = localStorage.getItem(this._accessTokenName) || "";
	}

	/**
	 * @description Get the access token
	 */
	get accessToken() {
		return this._accessToken;
	}

	/**
	 * @description Set the access token
	 */
	set accessToken(token: string) {
		this._accessToken = token;
		if (typeof window !== "undefined") localStorage.setItem(this._accessTokenName, token);
	}

	/**
	 * @description Clear the access token
	 */
	public clear() {
		this._accessToken = ""; // Clear the access token
		if (typeof window !== "undefined") localStorage.removeItem(this._accessTokenName); // Remove the access token from the local storage
	}
}

export default new TokenService() as TokenService;
