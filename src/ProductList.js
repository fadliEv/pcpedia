import dataDummy from './dataDummy'; // Import data dummy yang sudah dibuat sebelumnya
import ProductCard from './ProductCard'; // Komponen untuk menampilkan produk
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductList({ navigation }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredData, setFilteredData] = useState(dataDummy);

  const handleSearch = (text) => {
    setSearchKeyword(text);
    const filtered = dataDummy.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari produk..."
            value={searchKeyword}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
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
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,    
  },
  searchContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight : 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    width : 320,    
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  
});
