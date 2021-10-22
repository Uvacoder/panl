console.log("Hello node");

//node-fetch 2.6.1
//onst fse = require("fs-extra")
//const Jimp = require("jimp")
const cwd = process.cwd();
//const inpath = `${cwd}/thumbnails`
//const outpath = `${cwd}/src/data`

// include node fs module
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// writeFile function with filename, content and callback function
// fs.writeFile(
// 	"src/data/newfile.txt",
// 	"Learn Node FS module",
// 	{ flag: "a+" },
// 	function (err) {
// 		if (err) throw err;
// 		console.log("File is created successfully.");
// 	}
// );

// fs.appendFile(
// 	"newfile.txt",
// 	"\nLearn Node FS module 2",
// 	{ flag: "a+" },
// 	function (err) {
// 		if (err) throw err;
// 		console.log("File is created successfully.");
// 	}
// );

console.log(path.basename(`${cwd}`));

const TOKEN = "OPpZ58Hfg0rq2zE9C77Ngiw2Nu9ozGKvvhepWH5et8U";
const colorsArr = [];
const loadColorPalette = async () => {
	try {
		const params = {
			access_token: TOKEN,
			content_type: "themes",
			// limit: 20,
			// order: '-fields.likes'
			order: "fields.name",
		};
		const esc = encodeURIComponent;
		const query = Object.keys(params)
			.map((k) => `${esc(k)}=${esc(params[k])}`)
			.join("&");
		const response = await fetch(
			"https://cdn.contentful.com/spaces/rysom3n9r3je/entries?" + query
		);
		if (response.status === 200) {
			const data = await response.json();

			data.items.forEach((item) => {
				//console.log(JSON.stringify(item.fields));
				colorsArr.push(item.fields);
			});
		} else {
			console.log("Error: " + response.status);
		}
	} catch (err) {
		console.log("error", err);
		throw "Parameter is not a number!";
	}
};

loadColorPalette().then(() => {
	var jsonContent = JSON.stringify(colorsArr);
	fs.writeFile("src/data/colors.json", jsonContent, "utf8", function (err) {
		if (err) {
			console.log(
				"An error occured while writing JSON Object to File."
			);
			return console.log(err);
		}

		console.log("JSON file has been saved.");
	});
});

// json data
var jsonData =
	'{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

// parse json
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);

fs.writeFile("output.json", jsonContent, "utf8", function (err) {
	if (err) {
		console.log("An error occured while writing JSON Object to File.");
		return console.log(err);
	}

	console.log("JSON file has been saved.");
});
