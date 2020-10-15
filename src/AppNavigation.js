import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PortalsList from './components/portalslist.component';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Portals">
                <Stack.Screen name="Portals" component={PortalsList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation