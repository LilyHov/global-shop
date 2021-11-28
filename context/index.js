import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
  store: {},
  setStore: () => {},
  setUser: () => {},
  shops: [],
  setShops: () => {},
  product: {},
  setProduct: () => {},
  setWishListCount: () => {},
  wishListCount: 0,

});

export function AppWrapper({ children }) {
  const [shops, setShops] = useState([]);
  const [user, setUser] = useState(null);
  const [store, setStore] = useState({});
  const [product, setProduct] = useState({});
  const [wishListCount, setWishListCount] = useState(0);

  const value = {
    user,
    setUser,
    setStore,
    store,
    shops,
    setShops,
    product,
    setProduct,
    wishListCount,
    setWishListCount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// export function useAuthContext() {
//   return useContext(AuthContext);
// }

export function useAppContext() {
  return useContext(AppContext);
}
