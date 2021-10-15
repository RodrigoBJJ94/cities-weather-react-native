import React from 'react';
import { TextInput } from 'react-native';

export default function input(props) {
    return (
        <TextInput
            placeholder='Enter the city name'
            placeholderTextColor='#fff'
            style={{color: '#fff', fontSize: 15}} 
            value={props.cityName}
            onChangeText={(text) => props.setCityName(text)}
        />
    );
};
