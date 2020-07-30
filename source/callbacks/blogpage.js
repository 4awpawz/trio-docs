/*
moduleDependencies:
- ../lib/blogPostMetaContainer
- ../lib/capitalize
*/

const importFresh = require("import-fresh");
const blogPostMetaContainer = importFresh("../lib/blogPostMetaContainer");
const capitalize = importFresh("../lib/capitalize");

module.exports = ({ $tag, $page, asset, site }) => {
    // set the title tag text
    const title = asset.collection.category === "latest" &&
        "Trio Blog | Official blog for Trio static site generator" ||
        `${capitalize(asset.collection.category)} | Trio Blog`;
    $page("title").text(title);
    // set the correct blog menu category as active
    $page(`[data-trio-${asset.collection.category}]`).addClass("blog-masthead__category--active");
    // add the articles
    const articles = asset.collection && asset.collection.data || site.articlesCatalog;
    site.articlesCount && articles.forEach(item => {
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