import axios from "axios";


// state........
export const state = () => ({
  products: [],
  cart: [],
  wishList: [],
});


// getters.........
export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id == id);
  },

  cartItemCount: (state) => {
    let quantityCount = 0;

    state.cart.forEach((item) => {
      quantityCount += item.quantity;
    });

    return quantityCount;
  },

  cartTotalPrice: (state) => {
    let total = 0;

    state.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    return total;
  },

  wishListItemCount: (state) => {
    let wishListQuantityCount = 0;

    state.wishList.forEach((item) => {
      wishListQuantityCount += item.quantity;
    });

    return wishListQuantityCount;
  },
};

// actions................
export const actions = {
  async getProducts({ commit }) {
    const res = await axios.get("https://fakestoreapi.com/products");
    commit("SET_PRODUCTS", res.data);
  },

  async getProduct({ commit }, { productId }) {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    commit("SET_PRODUCT", res.data);
  },

  addProductToCart({ commit }, { product, quantity }) {
    commit("ADD_TO_CART", { product, quantity });
  },

  removeProductFromCart({ commit }, product) {
    commit("REMOVE_PRODUCT_FROM_CART", product);
  },

  clearCart({ commit }) {
    commit("CLEAR_CART");
  },

  addProductToWishList({ commit }, { product, quantity }) {
    commit("ADD_TO_WISHLIST", { product, quantity });
  },

  removeProductFromWishList({commit}, product){
    commit("REMOVE_FROM_WISHLIST", product)
  },

  clearWishList({commit}) {
    commit("CLEAR_WISHLIST");
  }
};

// mutations................
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },

  SET_PRODUCT(state, product) {
    state.product = product;
  },

  ADD_TO_CART(state, { product, quantity }) {
    let productInCart = state.cart.find((item) => {
      return item.product.id === product.id;
    });
    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }

    localStorage.setItem(state, { product, quantity });

    state.cart.push({
      product,
      quantity,
    });
  },

  REMOVE_PRODUCT_FROM_CART(state, product) {
    state.cart = state.cart.filter((item) => {
      return item.product.id !== product.id;
    });
  },

  CLEAR_CART(state) {
    state.cart = [];
  },

  ADD_TO_WISHLIST(state, { product, quantity }) {
    let productInWishList = state.wishList.find((item) => {
      return item.product.id === product.id;
    });
    if (productInWishList) {
      alert('This product already added!')
      productInWishList.quantity +! quantity;
      return;
    }

    state.wishList.push({ product, quantity });
  },

  REMOVE_FROM_WISHLIST(state, product){
    state.wishList = state.wishList.filter((item) => item.product.id !==product.id
    )
  },

  CLEAR_WISHLIST(state) {
    state.wishList = [];
  },


};
