import React, { useState, useEffect } from 'react';
import Weather from './components/Weather/Weather/Weather';
import NotLoaded from './components/NotLoaded/NotLoaded';
import WeatherNull from './components/Null/WeatherNull';

export default function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const ap = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=46a9246bebba16d42b36aac3fc3ba8af`;

        try {
            const response = await fetch(ap);
            if (response.status == 200) {
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

    if (!loaded) {
        return <NotLoaded />
    }

    else if (weatherData === null) {
        return <WeatherNull fetchWeatherData={fetchWeatherData} />
    };

    return <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
};
