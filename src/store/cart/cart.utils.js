/**
 * Add a new item to cart
 *
 * @param {*} cartItems
 * @param {*} newItem
 */
export const addItemToCart = (cartItems, newItem) => {
  const isExistingCartItem = cartItems.find((item) => item.id === newItem.id);

  if (isExistingCartItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

/**
 * Determine the total quantity of items in the cart
 *
 * @param {*} cartItems
 */
export const getTotalQuantityOfItemsInCart = (cartItems) =>
  cartItems.reduce((total, item) => item.quantity + total, 0);