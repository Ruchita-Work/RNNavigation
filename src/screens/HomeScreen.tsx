import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import {Colors} from '../constants/Colors';
import {JSONPlaceholderAPI} from '../constants/Strings';
import EmptyView from '../components/EmptyView';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get<Item[]>(JSONPlaceholderAPI)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //Navigate on detail screen with data
  const onNavigate = (item: Item) => {
    navigation.navigate('Details', {item});
  };

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity onPress={() => onNavigate(item)}>
      <View style={styles.rowContainer}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {items.length > 0 ? (
        //Render the list of items
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        //Render empty view when no list of items
        <EmptyView/>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  }
});

export default HomeScreen;
