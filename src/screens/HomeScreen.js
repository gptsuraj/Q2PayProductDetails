import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { getProducts } from '../api/products';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts(sortBy, filter);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [sortBy, filter]);

  const handleSearch = () => {
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    setProducts(filteredProducts);
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      <Button title="Search" onPress={handleSearch} />
      <Button title="Sort by Price (Asc)" onPress={() => setSortBy('asc')} />
      <Button title="Sort by Price (Desc)" onPress={() => setSortBy('desc')} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
