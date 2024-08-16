import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { getCart, removeFromCart } from '../api/cart';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCart();
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (id) => {
    await removeFromCart(id);
    const updatedCart = await getCart();
    setCartItems(updatedCart);
  };

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Button title="Remove from Cart" onPress={() => handleRemove(item.id)} />
          </View>
        )}
      />
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default CartScreen;
