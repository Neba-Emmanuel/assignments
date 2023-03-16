import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Assignment_1 from './src/screens/Assignment_1';
import Assignment_2 from './src/screens/Assignment_2';
import Assignment_3 from './src/screens/Assignment_3';
import Assignment_4 from './src/screens/Assignment_4';

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
        options={{title: 'Screen One'}} 
        />
        <Stack.Screen 
        name="Assignment2" 
        component={Assignment_2}
        options={{title: 'Screen Two'}} 
        />
        <Stack.Screen 
        name="Assignment3" 
        component={Assignment_3}
        options={{title: 'Screen Three'}} 
        />
        <Stack.Screen 
        name="Assignment4" 
        component={Assignment_4}
        options={{title: 'Screen Four'}} 
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;