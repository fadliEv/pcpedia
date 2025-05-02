import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import dataDummy from './dataDummy'; // Import data dummy yang sudah dibuat sebelumnya
import ProductCard from './ProductCard'; // Komponen untuk menampilkan produk

export default function ProductList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataDummy}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          >
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,  // Menambahkan padding top agar konten tidak mentok ke atas
  },
});
