import { useAppContext } from '../context';
import { useEffect } from 'react';
import StoreService from '../services/Store';

export const useStore = () => {
    const { setStore, store } = useAppContext();

    const handleSetStore = (newStore) => {
        setStore(newStore);
        StoreService.setStore(newStore);
    };

    const handleDeleteStoreItem = (itemId) => {
        const current = store[itemId];
        if (current) {
            delete store[itemId];
            handleSetStore(store);
        }
    };

    const handleSetStoreItem = (item, count) => {
        StoreService.setItem(item, count);
        const newStore = StoreService.getStore();
        setStore(newStore);
    };


    useEffect(() => {
        const store = StoreService.getStore();
        if (store) {
            setStore(store);
        }
    }, []);


    const deleteStoreItem = (storeId) => {
        const store = StoreService.getStore();

        if (store && store[storeId]) {
            delete store[storeId];
        }

        handleSetStore(store);
    };


    return {
        setStore,
        store,
        handleDeleteStoreItem,
        handleSetStore,
        handleSetStoreItem,
        deleteStoreItem,
    };
};
