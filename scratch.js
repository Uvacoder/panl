const p = new Promise((resolve, reject) => {
	let isLoading = true;
	if (isLoading) {
		setTimeout(() => {
			resolve("resolved");
		}, 4000);
	} else {
		setTimeout(() => {
			reject("rejected");
		}, 4000);
	}
});

const pr = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("return resolved");
		}, 10000);
	});
};

p.then((result) => console.log(result)).catch((error) =>
	console.log("E: ", error)
);

pr().then((result) => console.log(result));
