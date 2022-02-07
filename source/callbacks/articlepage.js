/*
moduleDependencies: ../lib/blogPostMetaContainer
*/
const importFresh = require("import-fresh");
const blogPostMetaContainer = importFresh("../lib/blogPostMetaContainer");

module.exports = ({ $tag, $page, asset }) => {
    const data = asset.matter.data;
    // set the title tag text
    $page("title").text(`${data.title} | Trio Blog`);
    // set the correct blog menu category as active
    $page(`[data-trio-${data.category}]`).addClass("blog-masthead__category--active");
    // add the article
    $tag.find("h1.blog-post__article-title").append(data.articleTitle);
    $tag.find("div.blog-post__meta-container")
        .append(blogPostMetaContainer(data.category[0], asset.articleDate));
};
