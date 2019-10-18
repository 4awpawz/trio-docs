/*
dataDependencies: version
*/

module.exports = ({ $tag, site }) => $tag.append(`${site.dataCatalog.version.version}`);