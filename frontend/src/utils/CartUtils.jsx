export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  state.itemsPrice = addDecimals(itemsPrice);

  state.shippingPrice = addDecimals(itemsPrice > 100 ? 10 : 0);

  state.taxPrice = addDecimals(0.15 * itemsPrice);

  state.totalPrice = Math.round(
    parseFloat(state.itemsPrice) +
      parseFloat(state.shippingPrice) +
      parseFloat(state.taxPrice)
  );

  const cartToSave = {
    cartItems: state.cartItems,
    itemsPrice: state.itemsPrice,
    shippingPrice: state.shippingPrice,
    taxPrice: state.taxPrice,
    totalPrice: state.totalPrice,
  };

  localStorage.setItem("cart", JSON.stringify(cartToSave));

  return state;
};
