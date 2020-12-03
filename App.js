import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import RenderText from './RenderText'
import ContentScreen from './screens/ContentScreen'
import EventScreen from './screens/EventScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App(props) {
  function HomeScreen({navigation}){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <TouchableOpacity>Click me</TouchableOpacity>
      <RenderText words="Hello there my name is"></RenderText>
    </View>
    );
  }

  /*const HomeStack = createStackNavigator();
  function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             
    <HomeStack.Screen name="Details" component={DetailScreen} />
   </HomeStack.Navigator>
  );
}*/

  function DetailScreen(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail</Text>
    </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Content" component={ContentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
