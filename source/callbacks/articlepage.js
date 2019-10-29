/*
moduleDependencies: ./lib/blogPostMetaContainer
*/
const blogPostMetaContainer = require("./lib/blogPostMetaContainer");

module.exports = ({ $tag, asset }) => {
    const data = asset.matter.data;
    $tag.find("h1.blog-post__article-title").append(data.articleTitle);
    $tag.find("div.blog-post__meta-container")
        .append(blogPostMetaContainer(asset.matter.data.category[0], asset.articleDate));
};
