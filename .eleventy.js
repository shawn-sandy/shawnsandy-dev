// @ts-check
const fs = require("fs");

const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdown = require("@shawnsandy/ideas/lib/markdown");
const image = require("@11ty/eleventy-img");
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const take = "lodash.take";

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("www/404.html");
          res.write(content_404);
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  eleventyConfig.setQuietMode(true);

  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css", "www/css/");
  eleventyConfig.addPassthroughCopy("./system/dsp/assets", "www/assets/");
  eleventyConfig.addPassthroughCopy("./src/images", "./images/");
  eleventyConfig.addPassthroughCopy("./img");
  eleventyConfig.addPassthroughCopy("./src/js/min", "www/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/favicons/*.*", "/");
  // eleventyConfig.addPassthroughCopy("./src/robots.txt")

  // eleventy img
  eleventyConfig.addNunjucksAsyncShortcode(
    "img",
    async function (src, alt = "", outputFormat = "jpeg") {
      let stats = await image(src, {
        widths: [null],
        formats: [outputFormat],
        urlPath: "/images/",
        outputDir: "./www/images/",
      });
      let props = stats[outputFormat].pop();
      console.log(props);

      return `<img src="${props.url}" alt="${alt}">`;
    }
  );

  // css-min filter
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  //Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addCollection("developer", (collection) =>
    collection.getFilteredByTags("developers").sort((a, b) => {
      if (a.data.page.fileSlug > b.data.page.fileSlug) return -1;
      else if (a.data.page.fileSlug < b.data.page.fileSlug) return 1;
      else return 0;
    })
  );

  eleventyConfig.addPlugin(require("@shawnsandy/ideas/eleventy"));
  eleventyConfig.addPlugin(require("@shawnsandy/code-clipper"));

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(markdown);

  // navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "www",
      includes: "../system/_includes",
      data: "../system/_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // pathPrefix: "/",
  };
};
