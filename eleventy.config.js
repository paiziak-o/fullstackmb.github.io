import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
    // input directory
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

    // enable HtmlBase plugin
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};

export const config = {};