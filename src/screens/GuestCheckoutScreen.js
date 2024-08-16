// GuestCheckoutScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CartContext from './CartContext';

const GuestCheckoutScreen = ({ navigation }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Implement checkout logic here
        Alert.alert('Checkout successful', 'Your order has been placed.');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Text>{item.title}</Text>
                        <Text>${item.price}</Text>
                        <Button
                            title="Remove"
                            onPress={() => removeFromCart(item.id)}
                        />
                    </View>
                )}
            />
            <Button title="Checkout" onPress={handleCheckout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    cartItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
});

export default GuestCheckoutScreen;
