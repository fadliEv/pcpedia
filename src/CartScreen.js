import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataDummy from './dataDummy';
import Checkbox from 'expo-checkbox';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

export default function CartScreen({navigation}) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      const storedIds = await AsyncStorage.getItem('cartItems');
      if (storedIds) {
        const idList = JSON.parse(storedIds);
        const result = idList.map((id) => dataDummy.find((p) => p.id === id)).filter(Boolean);
        setCartItems(result);
        setSelectedIds(idList); // default semua terpilih
        setSelectAll(true);
      }
    };
    loadCart();
  }, []);

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allIds = cartItems.map((item) => item.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  const getTotal = () => {
    return cartItems
      .filter((item) => selectedIds.includes(item.id))
      .reduce((sum, item) => sum + item.getDiscountedPrice(), 0);
  };

  const removeItem = async (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    const updatedIds = updatedCart.map((item) => item.id);
    setCartItems(updatedCart);
    setSelectedIds(selectedIds.filter((i) => i !== id));
    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedIds));
  };

  const renderRightActions = (itemId) => (
    <TouchableOpacity style={styles.deleteBtn} onPress={() => removeItem(itemId)}>
      <FontAwesome name="trash" size={20} color="#fff" />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item.id)}>
      <View style={styles.itemContainer}>
        <Checkbox
            value={selectedIds.includes(item.id)}
            onValueChange={() => toggleSelect(item.id)}
            color="#3D90D7"
        />
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
          <Text style={styles.price}>Rp. {item.getDiscountedPrice().toLocaleString()}</Text>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>      
      {cartItems.length > 0 && (
        <View style={styles.selectAllRow}>
          <Checkbox
            value={selectAll}
            onValueChange={toggleSelectAll}
            color="#3D90D7"
            />
          <Text style={{marginLeft : 10}}>Pilih Semua</Text>
        </View>
      )}

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Keranjang kosong</Text>}
      />

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <View>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>Rp. {getTotal().toLocaleString()}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Payment', { cartItems: cartItems, total: getTotal() })}>
            <Ionicons name="cart" size={20} color="#fff" />
            <Text style={styles.checkoutText}>  Checkout ({selectedIds.length})</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",    
      paddingTop: 20,
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#333',
    },
    selectAllRow: {
      flexDirection: 'row',
      alignItems: 'center',    
      padding: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 12,
      border : 10,    
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      marginBottom: 12,
      marginLeft : 10    
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginHorizontal: 10,
    },
    details: {
      flex: 1,
      paddingRight: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#222',
    },
    desc: {
      fontSize: 13,
      color: '#666',
      marginVertical: 4,
    },
    price: {
      color: '#ff4800',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 2,
    },
    deleteBtn: {
      backgroundColor: '#f44336',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 104,            
    },
    emptyText: {
      textAlign: 'center',
      color: '#999',
      marginTop: 30,
      fontSize: 16,
    },
    footer: {
      borderTopWidth: 1,
      borderColor: '#eee',
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 4,
    },
    totalLabel: {
      fontSize: 14,
      color: '#777',
    },
    totalValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    checkoutBtn: {
      backgroundColor: '#3D90D7',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkoutText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
  