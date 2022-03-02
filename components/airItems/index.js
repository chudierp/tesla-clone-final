import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const AirItem = (props) => {
    return (
        <View style={styles.planeContainer}>
        <ImageBackground source={require('../.././assets/1600.jpeg')} style={styles.image} />
        
        <View style={styles.titles}>
          <Text style={styles.title}>Air.</Text>
          {/* <Text style={styles.subtitle}>Now boarding</Text> */}
        </View>

      </View>

    );
};

export default AirItem;

