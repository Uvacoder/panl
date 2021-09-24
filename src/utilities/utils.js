"use strict";

const RoundValues = function (obj) {
	console.log("utils round", "========");
	const _obj = obj;
	for (const [key, value] of Object.entries(_obj)) {
		_obj[key] = Math.round(value);
	}
	return _obj;
};

const Flat = function () {
	console.log("utils flat", "========");
};

export { RoundValues };
