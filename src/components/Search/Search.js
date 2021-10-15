import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';
import Input from './Input';

export default function Search({ fetchWeatherData }) {
    const [cityName, setCityName] = useState('');

    return (
        <View style={Styles.search}>
            <View style={Styles.input}>
                <Input style={Styles.input} cityName={cityName} setCityName={setCityName} />
            </View>
            <View>
                <TouchableOpacity style={Styles.button} onPress={() => fetchWeatherData(cityName)}>
                    <Text style={Styles.text}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
