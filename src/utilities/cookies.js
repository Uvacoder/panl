/* eslint-disable */
const Cookie = {
	cookieExist: function (cookieName) {
		var match = document.cookie.match(
			new RegExp("(^| )" + cookieName + "=([^;]+)")
		);
		if (match) {
			//console.log(match[2]);
			return true;
		} else {
			//console.log('-- cookie does\'t exist ---');
			//prompt to enter search
			return false;
		}
	},
	getCookieValue: function (cookieName) {
		var match = document.cookie.match(
			new RegExp("(^| )" + cookieName + "=([^;]+)")
		);
		if (match) {
			//console.log(match[2]);
			return match[2];
		} else {
			//console.log('-- cookie does\'t exist ---');
			//prompt to enter search
			return false;
		}
	},
	setCookie: function (cookieName, value) {
		document.cookie = cookieName + "=" + value;
	},
	deleteCookie: function (cookieName) {
		document.cookie =
			cookieName + "=; " + "expires = Thu, 01 Jan 1970 00:00:00 GMT";
	},
	getAllCookies: function () {
		console.log(document.cookie);
	},
};

export { Cookie };
