import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Styles from './Styles';
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';

const cod = "46a9246bebba16d42b36aac3fc3ba8af";

export default function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const ap = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${cod}`
        try {
            const response = await fetch(ap);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            };
            setLoaded(true);       
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchWeatherData('Lajeado');
    }, []);
    
    if(!loaded) {
        return (
            <View style={Styles.container}>
                <ActivityIndicator color='gray'  size={36} />
            </View>
        );
    }

    else if(weatherData === null) {
        return (
            <View style={Styles.container}>
                <Search fetchWeatherData={fetchWeatherData}/>
                <Text style={Styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        );
    };

    return (
        <View style={Styles.container}>
            <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}  />
        </View>
    );
};
