import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default function Titles({ name, country, description }) {
    return (
        <View style={Styles.main}>
            <Text style={Styles.cityAndCountry}>{name} - {country}</Text>
            <Text style={Styles.weatherDescription}>{(description)}</Text>
        </View>
    );
};
