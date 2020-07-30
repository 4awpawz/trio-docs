module.exports = ({ asset, $page }) => {
    const { newerUrl, olderUrl } = asset.collection;
    newerUrl && $page("a.navigator__newer").attr("href", newerUrl);
    newerUrl && $page("a.navigator__newer").addClass("navigator__newer--enabled", newerUrl);
    olderUrl && $page("a.navigator__older").attr("href", olderUrl);
    olderUrl && $page("a.navigator__older").addClass("navigator__older--enabled", newerUrl);
};
