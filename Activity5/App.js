import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const COLORS = [
  'lightpink', 
  'lightgreen',
  'lightyellow',
  'violet',
  'brown',
  'gray', 
  'orange',
];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Reading Books',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Social Media',
  },
  {
    id: '4d38abbe-c8f9-40b2-ae53-239ff5a89874', 
    title: 'Coffee',
  },
  {
    id: 'c1a8e9f4-564d-4647-88c4-712e51f4c03d',
    title: 'Watering Plants',
  },
  {
    id: '45c8f823-3325-4286-9574-fcc6230c9616', 
    title: 'Workout ',
  },
  {
    id: 'a14c6f84-75be-4336-8e3d-fc028b7b74d5',
    title: 'Shower',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === selectedId ? 'blue' : COLORS[index];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Morning</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
