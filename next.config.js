module.exports = {
	exportTrailingSlash: true,

	exportPathMap1: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/' },
		};
	},
};
