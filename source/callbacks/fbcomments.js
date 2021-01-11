module.exports = ({ site, $tag, asset }) => {
    const fbCommentsHref = site.buildType === "development" &&
        site.userConfig.fbCommentsHrefBaseDevelopment ||
        site.userConfig.fbCommentsHrefBaseRelease;
    $tag.attr("data-href", fbCommentsHref + asset.url);
};
