import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import dataDummy from './dataDummy';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const product = dataDummy.find((item) => item.id === productId);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  const handleAddToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cartItems');
      let cart = existingCart ? JSON.parse(existingCart) : [];
  
      if (!cart.includes(product.id)) {
        cart.push(product.id);
        await AsyncStorage.setItem('cartItems', JSON.stringify(cart));
        Alert.alert('Sukses', 'Produk ditambahkan ke keranjang');
      } else {
        Alert.alert('Info', 'Produk sudah ada di keranjang');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Gagal menyimpan keranjang');
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.imgUrl }} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.originalPrice}>{formatPrice(product.price)}</Text>
        <Text style={styles.discountedPrice}>{formatPrice(product.getDiscountedPrice())}</Text>
      </View>

      <View style={styles.rowInfo}>
        <View style={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name={i < Math.floor(product.rate) ? 'star' : 'star-o'}
              size={18}
              color="#FFD700"
            />
          ))}
        </View>
        <Text style={styles.stockText}>
          Stock: {product.stock}
        </Text>
      </View>

      <View style={styles.discountBadge}>
        <Entypo name="price-tag" size={14} color="#333" />
        <Text style={styles.discountText}> Diskon {product.getDiscountPercentage()}%</Text>
      </View>

      <Text style={styles.description}>{product.longDescription || product.description}</Text>

      <TouchableOpacity style={styles.actionButton} onPress={handleAddToCart}>
        <Ionicons name="cart" size={20} color="#fff" />
        <Text style={styles.buttonText}>  Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#ff4800' }]} onPress={() => Alert.alert('Proceed to buy')}>
        <Ionicons name="wallet" size={20} color="#fff" />
        <Text style={styles.buttonText}>  Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 20,
    color: '#ff4800',
    fontWeight: 'bold',
  },
  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    flexDirection: 'row',
  },
  stockText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  discountBadge: {
    flexDirection: 'row',
    backgroundColor: '#edcbbe',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  discountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D90D7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
