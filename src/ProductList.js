import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductCard from './ProductCard';
import dataDummy from './dataDummy'; // import data dummy

export default function ProductList({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={dataDummy}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
