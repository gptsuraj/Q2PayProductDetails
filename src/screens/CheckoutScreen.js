// screens/CheckoutScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const CheckoutScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const handleCheckout = () => {
    // Implement checkout functionality
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Checkout</Text>
      {cartItems.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

export default CheckoutScreen;
