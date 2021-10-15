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
        fontSize: 22,
        fontWeight: 'bold',
    },
    weather: {
        color: '#fff',
        fontSize: 15,
    },
    weatherDescription: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'capitalize',
    },
    temperatures: {
        alignItems: 'center',
        marginTop: 12,
    },
    others: {
        alignItems: 'center',
        marginTop: 0,
        marginLeft: 12,
    },
    data: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        paddingBottom: 8,
    }
});
