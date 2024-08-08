import axios from "axios";
class CartAPI {
  async fetchProduct(productId) {
    try {
      const { data } = await axios.get(`${import.meta.env.BASEURL}/api/products/${productId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const cartAPI = new CartAPI();

export default cartAPI;