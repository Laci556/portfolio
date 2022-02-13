module.exports = () => {
	const colors = require('./colors.json');
	const parsed = colors.flatMap((color) => [
		`bg-[#${color}]`,
		`text-[#${color}]`,
		`hover:text-[#${color}]`
	]);
	console.log(parsed);
	return parsed;
};
