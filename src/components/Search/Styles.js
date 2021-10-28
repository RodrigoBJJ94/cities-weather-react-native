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
        width: 100,
        paddingTop: 4,
        paddingBottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    text: {
        color: '#fff',
        fontFamily: 'Raleway-ExtraBold',
        fontSize: 20,
    },
});
