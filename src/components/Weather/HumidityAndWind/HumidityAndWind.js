import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default function HumidityAndWind({ humidity, speed }) {
    return (
        <View style={Styles.others}>
            <Text style={Styles.weather}>Humidity: {humidity} %</Text>
            <Text style={Styles.weather}>Wind Speed: {(speed * 3.6).toFixed(1)} km/h - {(speed * 2.237).toFixed(1)} mph</Text>
        </View >
    );
};
