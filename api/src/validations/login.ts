/**
 * validation regex for the email address
 * @param {string} email email address
 */
export function emailValidate(email: string) {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
}
