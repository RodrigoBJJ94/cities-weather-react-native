import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    search: {
        width: Dimensions.get('screen').width,
        height: 95,
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#23a7be',
        width: 90,
        height: 32,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});
