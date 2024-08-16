// ProductListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const ProductListScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [filter, sort, searchQuery]);

    const fetchProducts = async () => {
        let url = 'https://fakestoreapi.com/products';
        if (searchQuery) url += `?search=${searchQuery}`;
        if (filter) url += `&filter=${filter}`;
        if (sort) url += `&sort=${sort}`;

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.search}
                placeholder="Search"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            {/* Filters and Sorting implementation here */}
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.product}>
                        <Text>{item.title}</Text>
                        <Text>${item.price}</Text>
                        <Button
                            title="Add to Cart"
                            onPress={() => {/* Add to cart functionality */}}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    search: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8
    },
    product: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
});

export default ProductListScreen;
