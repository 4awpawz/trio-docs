module.exports = ({ asset, $tag, $page }) => {
    asset.matter.data.socialMediaMetaTags && asset.matter.data.socialMediaMetaTags
        .forEach(metatag => $tag.before(metatag));
    $tag.remove();
};
