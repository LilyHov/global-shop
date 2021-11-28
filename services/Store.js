export const store_key = 'store';

class StoreService {
  static getStore = () => {
    let store = {};
    try {
      store = localStorage.getItem(store_key);
      if (store) {
        store = JSON.parse(store);
      }
    } catch (e) {}

    return store;
  };

  static deleteStore = () => {
    localStorage.removeItem(store_key);
  }

  static setStore = (data) => {
    localStorage.setItem(store_key, JSON.stringify(data));
  };

  static setItem = (item = {}, count) => {
    const store = StoreService.getStore();

    const { shop_id } = item;

    if (!store) {
      return StoreService.setStore({
        [shop_id]: {
          items: [
            {
              ...item,
              count,
            },
          ],
          brand: item.shop_name,
          order_type: '',
        },
      });
    }

    if (store.hasOwnProperty(shop_id)) {
      const newItems = [];
      let match = store[shop_id]?.items.find(i => parseInt(i.id) === parseInt(item.id));
      store[shop_id]?.items?.forEach(i => {
        if (match) {
          newItems.push({
            ...i,
            count: i.count + count,
          });
          return;
        }
        newItems.push(i);
      });

      if (!match) {
        newItems.push({
          ...item,
          count,
        });
      }
      store[shop_id] = {
        ...store[shop_id],
        items: newItems,
      };

      return StoreService.setStore(store);
    }

    StoreService.setStore({
      ...store,
      [shop_id]: {
        items: [
          {
            ...item,
            count,
          },
        ],
        brand: item.shop_name,
        order_type: '',
      }
    });
  };
}

export default StoreService;
