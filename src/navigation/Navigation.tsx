import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigationStack from './HomeNavigationStack';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeNavigationStack />
    </NavigationContainer>
  );
};

export default Navigation;
