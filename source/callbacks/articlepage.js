module.exports = ({ $tag, asset }) => {
    const data = asset.matter.data;
    $tag.find("h2.blog-post__articleTitle").append(data.articleTitle);
    $tag.find("div.blog-post__articleDate").append(asset.articleDate);
};
