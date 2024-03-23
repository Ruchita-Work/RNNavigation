import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface Props {
  route: {
    params: {
      item: Item;
    };
  };
}

const DetailsScreen: React.FC<Props> = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
});

export default DetailsScreen;
