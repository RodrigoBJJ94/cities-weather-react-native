import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import Styles from './Styles';
import Search from '../Search/Search';
import { haze, rainy, snow, sunny } from '../Images/Images';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
            name,
            main: { temp, humidity },
            wind: { speed }
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;   
    }

    let textColor = backgroundImage !== sunny ? 'white' : 'black'
    
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={backgroundImage}
                style={Styles.backgroundImg}
                resizeMode='cover'
            >
                <Search fetchWeatherData={fetchWeatherData} />
                <View style={{alignItems: 'center' }}>
                    <Text style={{ ...Styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...Styles.headerText, color: textColor, fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...Styles.headerText, color: textColor,}}>{temp} °C</Text>
                </View>
                <View style={Styles.extraInfo}>
                    <View style={Styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>
                    <View style={Styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>            
                </View>
            </ImageBackground>
        </View>
    );
};
