import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import dataDummy from './dataDummy';

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const product = dataDummy.find((item) => item.id === productId);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: product.imgUrl }} style={{ width: '100%', height: 250 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{product.name}</Text>
      <Text style={{ fontSize: 18, color: '#ff4800', marginVertical: 10 }}>Rp. {product.price}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => {/* Handle add to cart */}} />
      <Button title="Buy Now" onPress={() => {/* Handle buy now */}} />
      <Button title="Share" onPress={() => {/* Handle share */}} />
      <Button title="View Location on Map" onPress={() => {/* Handle view location */}} />
    </View>
  );
}
