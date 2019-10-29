/*
moduleDependencies: ./lib/blogPostMetaContainer
*/
const blogPostMetaContainer = require("./lib/blogPostMetaContainer");

module.exports = ({ $tag, site }) => {
    site.articlesCount && site.articlesCatalog.forEach(item => {
        const data = item.matter.data;
        $tag.append(/* html */ `
            <article class="blog-post">
                <h1 class="blog-post__article-title">
                    <a data-trio-link class="blog-post__link" href="${item.url}">${data.articleTitle}</a>
                </h1>
                <div class="blog-post__meta-container">
                    ${blogPostMetaContainer(data.category[0], item.articleDate)}
                </div>
                <p class="blog-post__articleExcerpt">${item.matter.excerpt}</p>
            </article>
        `);
    });
};