module.exports = ({ $tag, asset }) => {
    const activeHeaderItem = asset.matter.data.activeHeaderItem;
    if (!activeHeaderItem) {
        throw new Error("Error: \"activeHeaderItem\" property not found in fragment");
    }
    $tag.find(`li:nth-child(${activeHeaderItem})`)
        .addClass("header__nav-item--active");
};