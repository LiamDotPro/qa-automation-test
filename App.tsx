import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Login: undefined;
    Dashboard: undefined;
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
