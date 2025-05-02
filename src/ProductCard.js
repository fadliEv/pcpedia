import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: product.imgUrl
          }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.price}>Rp. {product.price}</Text>
        <Text style={styles.rate}>Rating : {product.rate}</Text>
        <Text>Terjual : {product.terjual}</Text>
        <View style={styles.discountSec}>
          <Text style={styles.discountText}>Hemat Rp. {product.getDiscountedPrice()}</Text>
          <Text style={styles.discountText}>Discount {product.getDiscountPercentage()}%</Text>
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
      },
      image: {
        width: 130,
        height: 130,
        borderRadius: 8,
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
      price: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#ff4800",
      },
      rate: {
        fontSize: 14,
        color: "#888",
        marginBottom: 7,
      },
      discountSec: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      discountText: {
        padding: 5,
        height: 23,
        backgroundColor: "#edcbbe",
        fontSize: 12,
        borderRadius: 7,
      },
})
