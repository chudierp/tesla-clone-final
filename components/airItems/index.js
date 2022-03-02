import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton  from '../styledButton';

const AirItem = (props) => {
    return (
        <View style={styles.planeContainer}>
        <ImageBackground source={require('../.././assets/1600.jpeg')} style={styles.image} />
        
        <View style={styles.titles}>
          <Text style={styles.title}>Air.</Text>
          {/* <Text style={styles.subtitle}>Now boarding</Text> */}
        </View>
        <StyledButton
            type='primary' 
            content={'book flights'}
            onPress={() => {
                console.warn('book flight was pressed')
            }}
        />
        <StyledButton
            type='secondary' 
            content={'find trip'}
            onPress={() => {
                console.warn('find trip was pressed')
            }}
        />

      </View>

    );
};

export default AirItem;

