import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default function Titles({ name, country, main }) {
    return (
        <View style={Styles.main}>
            <Text style={Styles.cityAndCountry}>{name} - {country}</Text>
            <Text style={Styles.weather}>{main === 'Clouds' ? 'Cloudy' : main}</Text>
        </View>
    );
};
