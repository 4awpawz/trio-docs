module.exports = ({ $tag, asset }) => {
    const activeDocIndexItem = asset.matter.data.activeDocIndexItem;
    $tag.find(`li:nth-child(${activeDocIndexItem})`)
        .find("a.doc-page-index__list-item-link")
        .addClass("doc-page-index__list-item-link--current");
};