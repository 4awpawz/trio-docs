module.exports = ({ $tag, asset, site }) => {
    const categoriesCatalogItem = site.categoriesCatalog.filter(item => item.category === asset.matter.data.category[0])[0];
    const currentItemIndex = categoriesCatalogItem.related.findIndex(item => item.url === asset.url);
    const newerUrl = currentItemIndex > 0 && categoriesCatalogItem.related[currentItemIndex - 1].url || "";
    const olderUrl = currentItemIndex + 1 < categoriesCatalogItem.related.length &&
        categoriesCatalogItem.related[currentItemIndex + 1].url || "";
    newerUrl && $tag.find("a.navigator__newer").attr("href", newerUrl);
    newerUrl && $tag.find("a.navigator__newer").addClass("navigator__newer--enabled", newerUrl);
    olderUrl && $tag.find("a.navigator__older").attr("href", olderUrl);
    olderUrl && $tag.find("a.navigator__older").addClass("navigator__older--enabled", newerUrl);
};
