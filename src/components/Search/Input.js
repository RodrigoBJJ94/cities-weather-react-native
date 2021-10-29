import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function input({ cityName, setCityName }) {
    return (
        <TextInput
            placeholder='Enter The City Name'
            placeholderTextColor='#fff'
            style={Styles.input}
            value={cityName}
            onChangeText={(text) => setCityName(text)}
        />
    );
};
