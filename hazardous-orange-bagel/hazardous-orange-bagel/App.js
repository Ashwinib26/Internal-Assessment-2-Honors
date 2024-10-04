import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

const shoes = [
  { id: '1', name: 'Running Shoes', price: '$100', image: 'C:/Users/cw/Desktop/im1.jpg' },
  { id: '2', name: 'Basketball Shoes', price: '$120', image: 'C:/Users/cw/Desktop/im2.jpg' },
  { id: '3', name: 'Football Shoes', price: '$130', image: 'C:/Users/cw/Desktop/im3.jpg' },
  { id: '4', name: 'Tennis Shoes', price: '$90', image: 'C:/Users/cw/Desktop/im4.jpg' },
  { id: '5', name: 'Hiking Boots', price: '$150', image: 'C:/Users/cw/Desktop/im5.jpg' },
  { id: '6', name: 'Casual Sneakers', price: '$80', image: 'C:/Users/cw/Desktop/im6.jpg' },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sport Shoes</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={shoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2} // Change layout to show more items
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>All Rights Reserved © 2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#4CAF50', alignItems: 'center' },
  headerText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  productCard: { margin: 10, alignItems: 'center', width: '45%' },
  productImage: { width: 150, height: 150, borderRadius: 10 },
  productName: { fontSize: 18, marginVertical: 5 },
  productPrice: { fontSize: 16, color: '#888' },
  footer: { padding: 15, alignItems: 'center', backgroundColor: '#ddd' },
  footerText: { fontSize: 14, color: '#333' },
});

export default App;
