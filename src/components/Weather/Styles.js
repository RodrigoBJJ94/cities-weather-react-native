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
        fontSize: 23,
        fontFamily: 'Raleway-ExtraBold',
    },
    weather: {
        color: '#fff',
        fontFamily: 'Raleway-Regular',
        fontSize: 17,
    },
    weatherDescription: {
        color: '#fff',
        fontFamily: 'Raleway-Bold',
        fontSize: 21,
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
