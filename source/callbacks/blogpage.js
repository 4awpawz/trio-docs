const capitalize = require("./lib/capitalize.js");

module.exports = ({ $, page, site, cheerio }) => {
    const $target = $("#articles");
    $target.after("<ul class=\"articles-list\"></ul>");
    if (site.articlesCount) {
        site.articlesCatalog.forEach(item => {
            const $articlesList = $("ul.articles-list");
            const data = item.matter.data;
            $articlesList.append(/* html */`
            <li>
                <a data-trio-link href="${item.url}">
                    ${data.title} - Posted to ${capitalize(data.category[0])} - ${item.articleDate}
                </a>
            </li>
        `);
        });
    }
};