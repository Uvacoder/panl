"use strict";

const RoundValues = function (obj) {
	const _obj = obj;
	for (const [key, value] of Object.entries(_obj)) {
		_obj[key] = Math.round(value);
	}
	return _obj;
};

export { RoundValues };
