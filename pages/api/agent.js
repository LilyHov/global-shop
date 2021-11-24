const Products = {
    getProducts: () =>
        import('../../mock/products-list.json')
}
const Settings = {
    getSettings: () =>
        import('../../mock/settings.json')
}

export default {
    Products,
    Settings
}