import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import Styles from './Styles';
import Search from '../Search/Search';
import { Ash, Cloudy, DrizzleDay, DrizzleNight, Dust, MistDay, MistNight, Night, Rain, SandDay, SandNight, Smoke, SnowDay, SnowNight, Sunny, Thunderstorm, Tornado } from '../Images/Images';

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
        if(weather === 'Ash') return Ash
        if(weather === 'Clouds') return Cloudy
        if(weather === 'Drizzle') return DrizzleDay

        if(weather === 'Dust') return Dust

        if(weather === 'Fog') return MistDay

        if(weather === 'Haze') return MistDay

        if(weather === 'Mist') return MistDay

        if(weather === 'Clear') return Sunny

        if(weather === 'Rain') return Rain
        if(weather === 'Sand') return SandDay

        if(weather === 'Smoke') return Smoke
        if(weather === 'Snow') return SnowDay

        if(weather === 'Squall') return Rain
        if(weather === 'Thunderstorm') return Thunderstorm
        if(weather === 'Tornado') return Tornado
    };
    
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
                    <Text style={{ ...Styles.headerText, fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...Styles.headerText, fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...Styles.headerText,}}>{temp} °C</Text>
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
