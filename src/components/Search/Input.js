import React from 'react';
import { TextInput } from 'react-native';

export default function input({ cityName, setCityName }) {
    return (
        <TextInput
            placeholder='Enter The City Name'
            placeholderTextColor='#fff'
            style={{ color: '#fff', fontSize: 17, fontWeight: 'bold', width: 170 }}
            value={cityName}
            onChangeText={(text) => setCityName(text)}
        />
    );
};
