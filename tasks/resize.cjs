// Tssk to resize images in public directory, image from unsplash are huge, need to scale down
const fs = require("fs"); //file system for node
const mkdirp = require("mkdirp"); // like mkdir but for node, returns a promise with resolving the first directory created
const jimp = require("jimp"); // image manimpulation

const CWD = process.cwd(); // current working directory
const pathIn = `${CWD}/public`; // path
const pathOut = `${CWD}/public/images`; // path out for destination
const sizes = [32, 720]; // width of image want to scale to

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
function getNewImages() {
	const filesIn = fs.readdirSync(pathIn).filter((d) => d.includes("jpg"));
	const filesOut = fs
		.readdirSync(`${pathOut}/${sizes[0]}`)
		.filter((d) => d.includes("jpg"));

	// Returns any new files not included in the public/images/sizes32 directory
	return filesIn.filter((d) => !filesOut.includes(d));
}

function resizeImages(file) {
	// function return a promise which can either be resolved or rejected
	// takes 1 file as a parameter
	return new Promise((resolve, reject) => {
		const promises = sizes.map((size) => {
			// creates a constant called promises
			// each size in sizes will return a promise with either resolve or reject
			return new Promise((resolve, reject) => {
				// a promise with resolve or reject
				const src = `${pathIn}/${file}`;
				const dest = `${pathOut}/${size}/${file}`;

				console.log(`- resizing ${file} -> ${size}`);

				// jimp - image manimpulation, a promise with a resolve
				// img is the result of the resolve
				jimp.read(src).then((img) => {
					img.resize(size, jimp.AUTO)
						.quality(70)
						.write(dest, resolve);
				});
			}).catch(reject);
		});
		// since promises has 2 promises, use Promise.all(promises)
		Promise.all(promises).then(resolve).catch(reject);
	});
}

// async use with await, try and catch
(async () => {
	console.log("task: resizing thumbnails - resources");
	sizes.forEach((size) => mkdirp.sync(`${pathOut}/${size}`)); // will create 2 directories from the sizes array
	const files = getNewImages(); // get list of new images

	try {
		for (let file of files) {
			await resizeImages(file);
		}
	} catch (e) {
		console.log(e);
	}

	console.log("DONE: reszing thumbnails - resources");
	process.exit(); // when done exit
})();
