const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const jimp = require("jimp");

const CWD = process.cwd();
const pathIn = `${CWD}/public`;
const pathOut = `${CWD}/public/images`;
const sizes = [480, 720];
const QUALITY = 100;

function getImages() {
	const files = fs.readdirSync(pathIn).filter((d) => d.includes("jpg"));
	return files;
}

function resizeImages(file) {
	return new Promise((resolve, reject) => {
		const promises = sizes.map((size) => {
			// get the image from argument.
			const src = `${pathIn}/${file}`;
			const dest = `${pathOut}/${size}`;
			return new Promise((resolve, reject) => {
				jimp.read(src).then((image) => {
					image.resize(sizes[0], jimp.AUTO)
						.quality(QUALITY)
						.greyscale()
						.write(`${dest}/${file}`, resolve);
				});
			}).catch(reject);
		});
		Promise.all(promises).then(resolve).catch(reject);
	});
}

(async () => {
	console.log("task: resizing thumbnails - resources");
	const files = getImages();
	sizes.forEach((size) => mkdirp.sync(`${pathOut}/${size}`));
	console.log("files: " + files);
	try {
		for (let file of files) {
			console.log(`- resizing ${file}`);
			await resizeImages(file).then(() => console.log("file done"));
		}
	} catch (error) {
		console.log(error);
	}
	console.log("DONE: reszing thumbnails - resources");
	process.exit(); // when done exit
})();
