  import {
    getData
  } from './getData.js';

  const wishList = ['idd005', 'idd123', 'idd007', 'idd015'];

  const cartList = [{
      id: 'idd015',
      count: 3
    },
    {
      id: 'idd055',
      count: 1
    },
    {
      id: 'idd125',
      count: 2
    },
  ];

  export const loadData = () => {
    if (location.search) {
      const search = decodeURI(location.search)
      const prop = search.split('=')[0].substring(1);
      console.log(prop);
      const value = search.split('=')[1];
      console.log(value);

      if (prop === 's') {
        getData.search(value, (data) => console.log(data));
      } else if (prop === 'wishlist') {
        getData.wishList(wishList, (data) => console.dir({
          wishlist: data
        }));
      } else if (prop === 'cat' || prop === 'cubcat') {
        getData.category(prop, value, (data) => console.log(data));
      }
    }

    if (location.hash) {
      getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')) {
      getData.cart(cartList, (data) => console.log(data))
    }
  };