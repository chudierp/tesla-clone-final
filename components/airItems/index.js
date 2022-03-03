import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';
import StyledButton  from '../styledButton';
import flightlist from '../flightList/flights';
import ShowFlightList from '../flightList';

const AirItem = (props) => {
    console.log(props)
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
                flightlist().then((data)=> {
                    console.log('testing testig do8rjgo fg')
                    // console.log(data)
                    props.navigation.navigate('details', {data})
                }).catch((error)=> console.log(error))
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

