import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome untuk ikon bintang

export default function ProductCard({ product }) {
  // Format harga dengan menggunakan Intl.NumberFormat
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  // Fungsi untuk menampilkan bintang penuh dan kosong berdasarkan rating
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating); // Menghitung jumlah bintang penuh
    const emptyStars = 5 - fullStars; // Menentukan jumlah bintang kosong

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesome key={`full-${i}`} name="star" size={13} color="#FFD700" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesome key={`empty-${i}`} name="star-o" size={13} color="#FFD700" />);
    }

    return stars;
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: product.imgUrl
          }}
        />
        {/* Tampilkan label 'HABIS' jika stok habis */}
        {product.stock === 0 && (
          <View style={styles.outOfStock}>
            <Text style={styles.outOfStockText2}>HABIS</Text>
          </View>
        )}
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.productName}>{product.name}</Text>
        
        {/* Menampilkan harga asli yang tercoret */}
        <Text style={styles.originalPrice}>{formatPrice(product.price)}</Text>
        
        {/* Menampilkan harga setelah diskon */}
        <Text style={styles.price}>{formatPrice(product.getDiscountedPrice())}</Text>

        {/* Menampilkan rating dalam bentuk bintang */}
        <View style={styles.ratingContainer}>
          {renderRatingStars(product.rate)}
        </View>

        {/* Menampilkan Terjual dan Stock dengan ikon */}
        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <FontAwesome name="shopping-cart" size={14} color="#888" />
            <Text style={styles.soldText}> Terjual: {product.terjual}</Text>
          </View>
          
          <View style={styles.infoText}>
            {/* <FontAwesome name="box" size={14} color={product.stock === 0 ? '#f44336' : '#888'} /> */}
            <Text style={[styles.stockText, product.stock === 0 && styles.outOfStockText]}> Stock: {product.stock}</Text>
          </View>
        </View>

        {/* Menampilkan diskon */}
        <View style={styles.discountSec}>
          <FontAwesome name="tag" size={14} color="#edcbbe" />
          <Text style={styles.discountText}> Discount {product.getDiscountPercentage()}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    position: 'relative', // Agar overlay di gambar bisa terlihat
  },
  imageContainer: {
    position: 'relative', // Menggunakan posisi relatif agar "HABIS" dapat diletakkan di atas gambar
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  outOfStock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang samar
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  outOfStockText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: "#888", // Warna abu-abu untuk harga asli yang tercoret
    textDecorationLine: 'line-through', // Coret harga asli
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ff4800", // Warna yang mencolok untuk harga setelah diskon
  },
  ratingContainer: {
    flexDirection: 'row', // Menampilkan bintang dalam satu baris
    marginTop: 5,
  },
  rate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 7,
  },
  infoRow: {
    flexDirection: 'row', // Menempatkan "Terjual" dan "Stock" dalam satu baris
    justifyContent: 'space-between', // Menyebar kedua elemen
    alignItems: 'center', // Menyelaraskan secara vertikal
    marginTop: 5,
  },
  infoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  soldText: {
    fontSize: 14,
    color: '#888',
  },
  stockText: {
    fontSize: 14,    
    color: '#888', 
  },
  outOfStockText2: {
    color: '#fff', // Warna merah untuk stok habis
    fontWeight : "bold"
  },
  discountSec: {
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
  },
  discountText: {
    padding: 5,
    height: 23,
    backgroundColor: "#edcbbe",
    fontSize: 12,
    borderRadius: 7,
    marginLeft: 5,
  },
});
