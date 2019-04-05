exports.dependencies = () => [];

exports.render = ({$, site}) => {
    $(".container p:last-child").append(`${site.timestamp}.`);
};