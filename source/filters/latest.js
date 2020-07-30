/*
 * Break up the articlesCatalog into multiple pages of n articles.
 * The value of n is stored in articlesPerPage in trio.json.
 */

module.exports = ({ site }) => {
    const n = site.userConfig.articlesPerPage;
    const datasets = [];
    const noOfPages = Math.ceil(site.articlesCatalog.length / n);
    for (let i = 0; i < noOfPages; i++) {
        const pageName = (i === 0 && "index") || "page" + (i + 1);
        const data = site.articlesCatalog.slice(n * i, n * i + n);
        const title = `Latest - page${i + 1} | ${site.userConfig.siteName}`;
        datasets.push({
            pageName,
            data,
            title,
            category: "latest",
            newerUrl: i === 0 ? "" : i === 1 ? "/blog" : "/blog/page" + i,
            olderUrl: i + 1 === noOfPages ? "" : "/blog/page" + (i + 2)
        });
    }
    return datasets;
};

