import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';
import Input from './Input';

export default function Search({ fetchWeatherData }) {
    const [cityName, setCityName] = useState('');

    return (
        <View style={Styles.search}>
            <Input cityName={cityName} setCityName={setCityName} />
            <TouchableOpacity onPress={() => fetchWeatherData(cityName)}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
};
