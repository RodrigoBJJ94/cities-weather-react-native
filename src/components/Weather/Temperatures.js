import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default function Temperatures({ temp, feels_like }) {
    return (
        <View>
            <Text style={Styles.weather}>Temperature: {temp.toFixed(0)}°C / {((temp * 9 / 5) + 32).toFixed(0)}°F</Text>
            <Text style={Styles.weather}>Feels Like: {feels_like.toFixed(0)}°C / {((feels_like * 9 / 5) + 32).toFixed(0)}°F</Text>
        </View>
    );
};
