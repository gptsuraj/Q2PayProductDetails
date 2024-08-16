// screens/ProductListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

const ProductListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleSort = (criteria) => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      a[criteria] > b[criteria] ? 1 : -1
    );
    setFilteredProducts(sortedProducts);
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />
      <Button title="Sort by Price" onPress={() => handleSort('price')} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Button
              title="View"
              onPress={() =>
                navigation.navigate('ProductDetail', { productId: item.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default ProductListScreen;
