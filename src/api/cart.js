import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToCart = async (product) => {
  try {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error(error);
  }
};

export const getCart = async () => {
  try {
    let cart = await AsyncStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const removeFromCart = async (productId) => {
  try {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart = cart.filter(item => item.id !== productId);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error(error);
  }
};
