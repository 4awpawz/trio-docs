module.exports = ({ $, site }) => {
    const $generatorTag = $("meta[name=\"generator\"]");
    $generatorTag.attr("content", "Trio v0.0.2");
};