module.exports = ({ $tag, asset }) => {
    $tag.append(new Date(asset.mtimeMs).toLocaleString());
};