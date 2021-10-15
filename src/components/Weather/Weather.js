import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground } from 'react-native';
import Styles from './Styles';
import Search from '../Search/Search';
import { Ash, Cloudy, Drizzle, Dust, Mist, Night, Rain, Sand, Smoke, Snow, Sunny, Thunderstorm, Tornado } from '../Images/Images';
import HumidityAndWind from './HumidityAndWind';
import Titles from './Titles';
import Temperatures from './Temperatures';

export default function Weather({ weatherData, fetchWeatherData }) {
    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather, name,
        main: { temp, feels_like, humidity },
        sys: { country },
        wind: { speed }
    } = weatherData;
    const [{ main }] = weather;
    const [{ icon }] = weather;
    const [{ description }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData]);

    function getBackgroundImg(weather) {
        if (weather === 'Ash') return Ash;
        if (main === 'Clouds' && (icon === '04d' || icon === '03d' || icon === '02d')) return Cloudy;
        if (main === 'Clouds' && (icon === '04n' || icon === '03n' || icon === '02n')) return Night;
        if (weather === 'Drizzle') return Drizzle;
        if (weather === 'Dust') return Dust;
        if (weather === 'Fog' || weather === 'Haze' || weather === 'Mist') return Mist;
        if (main === 'Clear' && icon === '01d') return Sunny;
        if (main === 'Clear' && icon === '01n') return Night;
        if (weather === 'Rain' || weather || 'Squall') return Rain;
        if (weather === 'Sand') return Sand;
        if (weather === 'Smoke') return Smoke;
        if (weather === 'Snow') return Snow;
        if (weather === 'Thunderstorm') return Thunderstorm;
        if (weather === 'Tornado') return Tornado;
    };

    return (
        <View style={Styles.container}>
            <ImageBackground source={backgroundImage} style={Styles.backgroundImg} resizeMode='cover'>
                <Search fetchWeatherData={fetchWeatherData} />
                <Titles name={name} country={country} description={description} />
                <Temperatures temp={temp} feels_like={feels_like} />
                <HumidityAndWind humidity={humidity} speed={speed} />
            </ImageBackground >
        </View >
    );
};
