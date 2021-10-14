import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Search({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={Styles.search}>
            <TextInput
                placeholder='Enter City name'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <TouchableOpacity onPress={() => fetchWeatherData(cityName)}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    );
};
