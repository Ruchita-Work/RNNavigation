import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { staticStrings } from '../constants/Strings';


const EmptyView = () => {

  return (
    <View style={styles.emptyContainer}>
    <Text>{staticStrings.home.noData}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
    emptyContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  });

export default EmptyView;
