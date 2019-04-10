module.exports = ({$, site}) => {
    $(".container p:last-child").append(`${site.timestamp}.`);
};