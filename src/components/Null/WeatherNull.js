import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';
import Search from '../Search/Search';

export default function WeatherNull({ fetchWeatherData }) {
    return (
        <View style={Styles.container}>
            <Search fetchWeatherData={fetchWeatherData} />
            <Text style={Styles.notFound}>City Not Found!</Text>
        </View>
    );
};
