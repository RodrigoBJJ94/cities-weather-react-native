import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';
import Input from './Input';
import StatusBarMain from '../StatusBar/StatusBarMain';

export default function Search({ fetchWeatherData }) {
    const [cityName, setCityName] = useState('');

    return (
        <View style={Styles.search}>
            <StatusBarMain />
            <Input cityName={cityName} setCityName={setCityName} />
            <TouchableOpacity style={Styles.button} onPress={() => fetchWeatherData(cityName)}>
                <Text style={Styles.text}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};
