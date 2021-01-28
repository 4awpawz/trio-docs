/*
 * Break up the articlesCatalog into multiple pages of articlesPerPage articles.
 * The value of articlesPerPage is stored in trio.json.
 */

module.exports = ({ site }) => {
    const articlesPerPage = site.userConfig.articlesPerPage;
    const dataset = [];
    const noOfPages = Math.ceil(site.articlesCatalog.length / articlesPerPage);
    for (let i = 0; i < noOfPages; i++) {
        const pageName = (i === 0 && "index") || "page" + (i + 1);
        const data = site.articlesCatalog.slice(articlesPerPage * i, articlesPerPage * i + articlesPerPage);
        dataset.push({
            pageName,
            data,
            category: "latest",
            newerUrl: i === 0 ? "" : i === 1 ? "/blog" : "/blog/page" + i,
            olderUrl: i + 1 === noOfPages ? "" : "/blog/page" + (i + 2)
        });
    }
    return dataset;
};
