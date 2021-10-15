import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width,
    },
    main: {
        alignItems: 'center',
        marginTop: 6,
    },
    cityAndCountry: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    weather: {
        color: '#fff',
    },
    weatherDescription: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'capitalize',
    },
    temperatures: {
        alignItems: 'center',
        marginTop: 12,
    },
    others: {
        marginTop: 340,
        marginLeft: 12,
    },
    black: {
        color: '#000'
    }
});
