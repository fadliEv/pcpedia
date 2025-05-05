import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function PaymentScreen({ route, navigation }) {
  const { cartItems, total } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rp. {item.getDiscountedPrice().toLocaleString()}</Text>
      </View>
    </View>
  );

  const handlePayment = () => {
    alert("Pembayaran Berhasil!");
    navigation.goBack(); // Kembali ke CartScreen atau ke halaman utama
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header */}
        <Text style={styles.header}>Detail Pembayaran</Text>

        {/* Alamat Pengiriman */}
        <View style={styles.addressContainer}>
          <Ionicons name="location-outline" size={24} color="#3D90D7" style={styles.icon} />
          <View style={styles.addressDetails}>
            <Text style={styles.addressHeader}>Alamat Pengiriman</Text>
            <Text style={styles.addressText}>Jl. Contoh Alamat No.123, Jakarta, Indonesia</Text>
            <Text style={styles.addressDescription}>Alamat ini digunakan untuk pengiriman produk yang telah dipesan. Pastikan alamat yang diberikan sudah benar.</Text>
          </View>
        </View>

        {/* Deskripsi Produk yang dibeli */}
        <View style={styles.productDescription}>
          <Text style={styles.productDescText}>Anda telah memilih beberapa produk untuk dibeli. Silakan pastikan detail produk berikut sudah benar sebelum melanjutkan ke pembayaran.</Text>
        </View>

        {/* Produk yang dibeli */}
        <View style={styles.productList}>
          {cartItems.map((item) => renderItem({ item }))}
        </View>

        {/* Deskripsi Metode Pembayaran */}
        <View style={styles.productDescription}>
          <Text style={styles.productDescText}>Pilih metode pembayaran yang Anda inginkan untuk menyelesaikan transaksi.</Text>
        </View>

        {/* Metode Pembayaran */}
       {/* Metode Pembayaran */}
<View style={styles.paymentInfo}>
  <Text style={styles.paymentHeader}>Metode Pembayaran</Text>

  {/* Kartu Kredit/Debit */}
  <View style={styles.methodContainer}>
    <View style={styles.methodRow}>
      <Ionicons name="card-outline" size={24} color="#3D90D7" style={styles.methodIcon} />
      <Text style={styles.methodTitle}>Kartu Kredit / Debit</Text>
    </View>
    <Text style={styles.methodDescription}>
      Gunakan kartu kredit atau debit untuk membayar secara langsung dan aman.
    </Text>
  </View>

  {/* Cash on Delivery */}
    <View style={styles.methodContainer}>
        <View style={styles.methodRow}>
        <FontAwesome name="money" size={24} color="#3D90D7" style={styles.methodIcon} />
        <Text style={styles.methodTitle}>Cash on Delivery (COD)</Text>
        </View>
        <Text style={styles.methodDescription}>
        Bayar tunai saat barang sampai di lokasi Anda. Cocok jika Anda ingin membayar langsung.
        </Text>
    </View>

    {/* Dompet Digital */}
    <View style={styles.methodContainer}>
        <View style={styles.methodRow}>
        <Ionicons name="wallet-outline" size={24} color="#3D90D7" style={styles.methodIcon} />
        <Text style={styles.methodTitle}>Dompet Digital</Text>
        </View>
        <Text style={styles.methodDescription}>
        Gunakan OVO, GoPay, Dana atau dompet digital lainnya dengan proses yang cepat dan praktis.
        </Text>
    </View>
    </View>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total Pembayaran</Text>
          <Text style={styles.totalValue}>Rp. {total.toLocaleString()}</Text>
        </View>
        <TouchableOpacity style={styles.paymentBtn} onPress={handlePayment}>
          <Ionicons name="checkmark-circle" size={20} color="#fff" />
          <Text style={styles.paymentText}> Bayar Sekarang</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 70, // untuk memberi ruang footer di bawah
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3D90D7',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    color: '#ff4800',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  addressDetails: {
    flex: 1,
  },
  addressHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addressText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  addressDescription: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },
  productDescription: {
    marginBottom:10,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop : 10
  },
  productDescText: {
    fontSize: 14,
    color: '#555',
  },
  paymentDescription: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  paymentDescHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paymentInfo: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  paymentHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paymentMethods: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  methodContainer: {    
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingTop :10
  },
  methodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  methodIcon: {
    marginRight: 10,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  methodDescription: {
    fontSize: 13,
    color: '#666',
    paddingLeft: 34,
  },  
  paymentDesc: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 45,
    marginTop: 5,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  totalLabel: {
    fontSize: 16,
    color: '#777',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentBtn: {
    backgroundColor: '#3D90D7',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
