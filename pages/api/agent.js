const Products = {
    getProducts: () =>
        import('mock/products-list.json').then(
            (response) => response.default
        )
}
const Settings = {
    getSettings: () =>
        import('mock/settings.json').then(
            (response) => response.default
        )
}

export default {
    Products,
    Settings
}