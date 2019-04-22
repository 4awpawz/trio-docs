module.exports = ({ $tag, site }) => {
    $tag.attr("content", `Trio ${site.userConfig.version}`);
};