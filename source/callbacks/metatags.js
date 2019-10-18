/*
dataDependencies: version
*/

module.exports = ({ $tag, site }) => $tag.attr("content", `Trio ${site.dataCatalog.version.version}`);