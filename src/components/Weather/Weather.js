import React, { useState, useEffect } from 'react'
import { View, ImageBackground } from 'react-native';
import Styles from './Styles';
import { Ash, Cloudy, Drizzle, Dust, Fog, Mist, Night, Rain, RainSun, Sand, Smoke, Snow, Sunny, Thunderstorm, Tornado } from '../Images/Images';
import StatusBarMain from '../StatusBar/StatusBarMain';
import Search from '../Search/Search';
import Titles from './Titles';
import Temperatures from './Temperatures';
import HumidityAndWind from './HumidityAndWind';

export default function Weather({ weatherData, fetchWeatherData }) {
    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather, name, main: { temp, feels_like, humidity }, sys: { country }, wind: { speed } } = weatherData;
    const [{ main, icon, description }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData]);

    function getBackgroundImg(weather) {
        if (main === 'Clouds' && (icon === '04d' || icon === '03d' || icon === '02d')) return Cloudy;
        if (main === 'Clouds' && (icon === '04n' || icon === '03n' || icon === '02n')) return Night;
        if (main === 'Clear' && icon === '01d') return Sunny;
        if (main === 'Clear' && icon === '01n') return Night;
        if (main === 'Rain' && (icon === '10d')) return RainSun;
        if ((main === 'Rain' && (icon !== '10d')) || main === 'Squall') return Rain;
        if (weather === 'Ash') return Ash;
        if (weather === 'Drizzle') return Drizzle;
        if (weather === 'Dust') return Dust;
        if (weather === 'Fog') return Fog;
        if (weather === 'Haze' || weather === 'Mist') return Mist;
        if (weather === 'Sand') return Sand;
        if (weather === 'Smoke') return Smoke;
        if (weather === 'Snow') return Snow;
        if (weather === 'Thunderstorm') return Thunderstorm;
        if (weather === 'Tornado') return Tornado;
    };

    return (
        <View style={Styles.container}>
            <StatusBarMain />
            <ImageBackground source={backgroundImage} style={Styles.backgroundImg} resizeMode='cover'>
                <View style={Styles.data}>
                    <Search fetchWeatherData={fetchWeatherData} />
                    <Titles name={name} country={country} description={description} />
                    <Temperatures temp={temp} feels_like={feels_like} Sunny={Sunny} />
                    <HumidityAndWind humidity={humidity} speed={speed} />
                </View>
            </ImageBackground>
        </View>
    );
};
