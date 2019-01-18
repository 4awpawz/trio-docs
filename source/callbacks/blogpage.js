const capitalize = require("./lib/capitalize.js");

module.exports = ({ $, site }) => {
    if (site.articlesCount) {
        const $target = $("#articles");
        $target.after("<ul class=\"articles-list\"></ul>");
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