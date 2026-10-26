module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy("**/*.css");
eleventyConfig.addPassthroughCopy("**/*.js");
eleventyConfig.addPassthroughCopy("**/*.{jpg,jpeg,png,webp,gif,svg,ico,avif}");
eleventyConfig.addPassthroughCopy("**/*.pdf");
eleventyConfig.addPassthroughCopy("**/*.{mp4,m4v,mov,webm,mp3,wav}");
eleventyConfig.addPassthroughCopy("**/*.{woff,woff2,ttf,otf,eot}");
eleventyConfig.addPassthroughCopy("**/*.xml");
eleventyConfig.addPassthroughCopy("**/*.txt");
eleventyConfig.addPassthroughCopy("**/*.{zip,ppt,pptx,doc,docx,xls,xlsx}");
eleventyConfig.addGlobalData("permalink", () => {
return (data) =>
`${data.page.filePathStem}.${data.page.outputFileExtension}`;
});
return {
dir: {
includes: "_includes"
}
};
};