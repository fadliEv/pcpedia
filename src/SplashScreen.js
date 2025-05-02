import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Untuk ikon (misalnya ikon link atau ikon lainnya)

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Menampilkan logo PNG */}
      <Image
        source={require('./../assets/logo2.png')}  // Ganti dengan path logo PNG kamu
        style={styles.logo}
      />
      
      {/* Deskripsi Aplikasi PCPedia */}
      <Text style={styles.description}>
        Selamat datang di PCPedia, marketplace perangkat keras komputer dan laptop terbaik.
      </Text>

      {/* Ornament pengganti tombol, menggunakan ikon dan teks */}
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.linkText}>
          Go to Home
        </Text>
        <FontAwesome name="arrow-right" size={24} color="#3D90D7" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Background color of the screen
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 30, // Space between logo and description
    borderRadius: 20,  // Adding rounded corners to the logo for a modern touch
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5, // Shadow for Android
  },  
  description: {
    fontSize: 15,
    color: '#213448',
    textAlign: 'center',
    marginBottom: 30, // Space between description and link
    fontStyle: 'italic',
    fontWeight: '500',
    maxWidth: 350,
  },
  linkContainer: {
    flexDirection: 'row',   // Horizontal alignment of text and icon
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,  // Placing it near the bottom of the screen
  },
  linkText: {
    fontSize: 18,
    color: '#3D90D7',  // Same color as the button for consistency
    fontWeight: 'bold',
    marginRight: 10,   // Space between text and icon
  },
  icon: {
    marginLeft: 5, // Add some space between the text and the arrow icon
  },
});
