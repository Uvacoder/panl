"use strict";

const RoundValues = (obj) => {
	const _obj = obj;
	for (const [key, value] of Object.entries(_obj)) {
		_obj[key] = Math.round(value);
	}
	return _obj;
};

const SetRootProperty = (name, value) => {
	document.documentElement.style.setProperty(name, value);
	return;
};

const GetRootPropertyValue = (name) => {
	return document.documentElement.style.getPropertyValue(name);
};

const SetHSLToRoot = function (obj, type) {
	const _obj = obj;
	var rootPropPrefix;
	switch (type) {
		case "primary":
			rootPropPrefix = "--primary";
			break;
		case "accent":
			rootPropPrefix = "--accent";
			break;
		default:
			rootPropPrefix = "--neutral";
	}

	for (let [key, value] of Object.entries(_obj)) {
		if (key === "s" || key === "l") {
			// console.log(typeof value);
			value = value + "%";
		}
		SetRootProperty(`${rootPropPrefix}${key.toUpperCase()}`, value);
	}

	return;
};

export { RoundValues, SetRootProperty, GetRootPropertyValue, SetHSLToRoot };
