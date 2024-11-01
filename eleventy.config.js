export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");

    // passthroughs are relative to root not input directory
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    // dev server configuraiton
    eleventyConfig.setServerOptions({
        watch: [
            "src/**/*.liquid",
            "src/**/*.css",
            "src/**/*.js"
        ]
    });
};

export const config = {};