import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Coffee',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watering Plants',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Workout ',
  },
      {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Shower',
  },
];

const DATA1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Lunch',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Watching TV',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Washing Dishes',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tea',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Washing Clothes',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watching Kids playing outside',
  },
      {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Shower',
  },
];

const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dinner',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Milo time',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Folding clothes',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Netflix and chill',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Party time',
  },
      {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Singing',
  },
        {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dancing',
  },
          {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Freshing',
  },
            {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fighting',
  },
            {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '',
  },
];

type ItemProps = {title: string};


const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);


const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
     <Text >Morning </Text>
      <FlatList
        data={DATA} 
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text >Afternoon</Text>
      <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text >Evening </Text>
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />



    </SafeAreaView>
  </SafeAreaProvider>
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
