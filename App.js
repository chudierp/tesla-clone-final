import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AirItem from './components/airItems';

export default function App() {
  return (
    <View style={styles.container}>
      <AirItem />
      <StatusBar style="auto"/>
    </View>
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
