import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import flights from './flights.js'
import AirItem from '../airItems';


const ShowFlightList = ({ navigation, route }) => {
    const {data} = route.params
    // console.log(data.data[0])
    return (
        <View>
            <FlatList
                data={data.data}
                renderItem={(item)=>{
                    return <Text>{item.item.arrival.airport}</Text>}}
            />
        </View>

    );
};

export default ShowFlightList;