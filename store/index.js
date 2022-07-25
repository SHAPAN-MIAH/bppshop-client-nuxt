import axios from "axios";



export const state = () => ({
  products: [],
  cart: []
});



export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id == id)
  },

  cartItemCount: (state) => {
    return state.cart.length;
  },

  cartTotalPrice: (state) => {
    let total = 0;

    state.cart.forEach(item => {
      total += item.product.price * item.quantity;
    });

    return total
  }
};



export const actions = {
  async getProducts({ commit }) {
    const res = await axios.get("https://fakestoreapi.com/products")
      commit("SET_PRODUCTS", res.data);
  },


  async getProduct({ commit }, { productId }) {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        commit("SET_PRODUCT", res.data);
  },


  addProductToCart({commit}, {product, quantity}){
    commit('ADD_TO_CART', {product, quantity});
  }
};



export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },


  SET_PRODUCT(state, product) {
    state.product = product;
  },


  ADD_TO_CART(state, {product, quantity}){

    let productInCart = state.cart.find(item => {
      return item.product.id === product.id
    });
    if(productInCart){
      productInCart.quantity += quantity;
      return;
    }
    state.cart.push(
      {
        product, 
        quantity
      }
    )
  }
};
