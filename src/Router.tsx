import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Createscreen from './screens/Createscreen';
import Detailscreen from './screens/Detailscreen';
import Homescreen from './screens/Homescreen';
import { RootStackParamList } from './types/types';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Detail" component={Detailscreen} />
        <Stack.Screen
          name="Create"
          component={Createscreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
