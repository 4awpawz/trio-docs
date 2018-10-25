const breadcrumbs = (page) => {
    return page.matter.data.breadcrumbs.reduce((accum, current) => {
        return accum.length ? ` ${accum} : ${current}` : current;
    }, "");
};

module.exports = ({ $, page }) => {
    // add breadcrumbs navigation
    $("div.breadcrumbs").append(breadcrumbs(page));
};