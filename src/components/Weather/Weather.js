import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import Styles from './Styles';
import Search from '../Search/Search';
import { Ash, Cloudy, Drizzle, Dust, Mist, Night, Rain, Sand, Smoke, Snow, Sunny, Thunderstorm, Tornado } from '../Images/Images';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
        name,
        main: { temp, humidity },
        wind: { speed }
    } = weatherData;
    const [{ main }] = weather;
    const [{ icon }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if (weather === 'Ash') return Ash
        if (main === 'Clouds' && (icon === '04d' || icon === '03d' || icon === '02d' )) return Cloudy
        if (main === 'Clouds' && (icon === '04n' || icon === '03n' || icon === '02n' )) return Night
        if (weather === 'Drizzle') return Drizzle
        if (weather === 'Dust') return Dust
        if (weather === 'Fog') return Mist
        if (weather === 'Haze') return Mist
        if (weather === 'Mist') return Mist
        if (main === 'Clear' && icon === '01d') return Sunny
        if (main === 'Clear' && icon === '01n') return Night
        if (weather === 'Rain') return Rain
        if (weather === 'Sand') return Sand
        if (weather === 'Smoke') return Smoke
        if (weather === 'Snow') return Snow
        if (weather === 'Squall') return Rain
        if (weather === 'Thunderstorm') return Thunderstorm
        if (weather === 'Tornado') return Tornado
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
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...Styles.headerText, fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...Styles.headerText, fontWeight: 'bold' }}>{main} {icon}</Text>
                    <Text style={{ ...Styles.headerText, }}>{temp} °C</Text>
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
