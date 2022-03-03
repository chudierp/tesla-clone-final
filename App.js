import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AirItem from './components/airItems';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShowFlightList from './components/flightList';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
          <AirItem navigation={navigation} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="auto"/>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="details" component={ShowFlightList} />
      </Stack.Navigator>
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
