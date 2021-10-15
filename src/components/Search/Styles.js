import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    search: {
        width: Dimensions.get('screen').width,
        height: 86,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        marginTop: -7,
    },
    button: {
        backgroundColor: '#23a7be',
        width: 75,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
});
