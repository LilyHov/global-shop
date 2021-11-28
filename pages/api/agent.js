import productsData from '../../mock/products-list.json'
import settingsData from '../../mock/settings.json'

const Products = () => JSON.parse(JSON.stringify(productsData));

const Settings = () => JSON.parse(JSON.stringify(settingsData));

export default {
    Products,
    Settings
}