/*
 * Break up each category into multiple pages of n articles.
 * The value of n is stored in articlesPerPage in trio.json.
 */

const importFresh = require("import-fresh");
const capitalize = importFresh("../lib/capitalize");

module.exports = ({ site }) => {
    const n = site.userConfig.articlesPerPage;
    const datasets = [];
    site.categoriesCatalog.forEach(({ category, related }) => {
        const noOfPages = Math.ceil(related.length / n);
        for (let i = 0; i < noOfPages; i++) {
            const pageName = (i === 0 && category) || category + "/page" + (i + 1);
            const data = related.slice(n * i, n * i + n).map(item =>
                site.articlesCatalog.find(article => article.url === item.url));
            const title = `${capitalize(category)} - page${i + 1} | ${site.userConfig.siteName}`;
            datasets.push({
                pageName,
                data,
                title,
                category,
                newerUrl: i === 0 ? "" : i === 1 ? "/blog/" + category : "/blog/" + category + "/page" + i,
                olderUrl: i + 1 === noOfPages ? "" : "/blog/" + category + "/page" + (i + 2)
            });
        }
    });
    return datasets;
};
