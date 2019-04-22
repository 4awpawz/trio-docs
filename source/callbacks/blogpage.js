module.exports = ({ $tag, site }) => {
    site.articlesCount && site.articlesCatalog.forEach(item => {
        const data = item.matter.data;
        $tag.append(/* html */`
                <article class="blog-post">
                    <a data-trio-link class="blog-post__link" href="${item.url}">
                        <h2 class="blog-post__articleTitle">${data.articleTitle}</h2>
                    </a>
                    <div class="blog-post__articleDate">${item.articleDate}</div>
                    <p class="blog-post__articleExcerpt">${item.matter.excerpt}</p>
                </article>
            `);
    });
};