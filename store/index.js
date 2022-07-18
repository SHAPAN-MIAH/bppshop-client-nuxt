import axios from "axios";

export const state = () => ({
  products: [],
});

export const getters = {};

export const actions = {
  async getProducts({ commit }) {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      commit("SET_PRODUCTS", res.data);
    });
  },

  async getProduct({ commit }, { productId }) {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        commit("SET_PRODUCT", res.data);
      });
  },
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },

  SET_PRODUCT(state, product) {
    state.product = product;
  },
};
