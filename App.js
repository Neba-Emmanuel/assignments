import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Assignment_1 from './src/components/Assignment_1';
import Assignment_2 from './src/components/Assignment_2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
        name="Assignment1" 
        component={Assignment_1}
        options={{title: 'Assignment One'}} 
        />
        <Stack.Screen 
        name="Assignment2" 
        component={Assignment_2}
        options={{title: 'Assignment Two'}} 
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;