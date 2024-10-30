export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");

    // passthroughs are relative to root not input directory
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
};

export const config = {};