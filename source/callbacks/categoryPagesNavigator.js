module.exports = ({ asset, $page }) => {
    const { newerUrl, olderUrl } = asset.collection;
    newerUrl && $page("a.navigator__newer").attr("href", newerUrl).addClass("navigator__newer--enabled");
    olderUrl && $page("a.navigator__older").attr("href", olderUrl).addClass("navigator__older--enabled");
};
