import React from 'react';
import { TextInput } from 'react-native';

export default function input({ cityName, setCityName }) {
    return (
        <TextInput
            placeholder='Enter The City Name'
            placeholderTextColor='#fff'
            style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', width: 180 }}
            value={cityName}
            onChangeText={(text) => setCityName(text)}
        />
    );
};
