/*
 * Break up each category into multiple pages of n articles.
 * The value of n is stored in articlesPerPage in trio.json.
 */

module.exports = ({ site }) => {
    const articlesPerPage = site.userConfig.articlesPerPage;
    const dataset = [];
    site.categoriesCatalog.forEach(({ category, related }) => {
        const noOfPages = Math.ceil(related.length / articlesPerPage);
        for (let i = 0; i < noOfPages; i++) {
            const pageName = (i === 0 && category) || category + "/page" + (i + 1);
            const data = related.slice(articlesPerPage * i, articlesPerPage * i + articlesPerPage).map(item =>
                site.articlesCatalog.find(article => article.url === item.url));
            dataset.push({
                pageName,
                data,
                category,
                newerUrl: i === 0 ? "" : i === 1 ? "/blog/" + category : "/blog/" + category + "/page" + i,
                olderUrl: i + 1 === noOfPages ? "" : "/blog/" + category + "/page" + (i + 2)
            });
        }
    });
    return dataset;
};
