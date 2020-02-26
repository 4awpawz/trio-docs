module.exports = ({ site }) =>
    site.categoriesCatalog.map(item => ({ pageName: item.category, data: item }));
