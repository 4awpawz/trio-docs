module.exports = ({ asset, $tag, $page }) => {
    asset.matter.data.socialMediaMetaTags.forEach(metatag => $tag.after(metatag));
    $tag.remove();
};
