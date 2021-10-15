import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    main: {
        alignItems: 'center',
    },
    cityAndCountry: {
        color: '#fff',
    },
    weather: {
        color: '#fff',
    }
});
