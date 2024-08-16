import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async (sortBy = 'asc', filter = '') => {
  try {
    const response = await axios.get(API_URL);
    let products = response.data;

    if (filter) {
      products = products.filter(product => product.category === filter);
    }

    if (sortBy === 'asc') {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch products');
  }
};
