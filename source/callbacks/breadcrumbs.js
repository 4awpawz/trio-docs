const breadcrumbs = (frag) => {
    return frag.matter.data.breadcrumbs.reduce((accum, current) => {
        return accum.length ? ` ${accum} : ${current}` : current;
    }, "");
};

module.exports = ({ $, frag }) => {
    // add breadcrumbs navigation
    $("div.breadcrumbs").append(breadcrumbs(frag));
};