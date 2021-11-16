import { View, Text, StyleSheet, Image } from 'react-native'
export const gridCardStyle = StyleSheet.create({
    homeGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 135,
        height: 130,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        borderRadius: 7,
    },
    image: {
        width: '50%',
        height: '50%',
    },
    textView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        padding: 4,
        color: '#000',
        fontWeight: 'bold'
    },
    textDescription: {
        color: '#3b3b3b',
        fontWeight: '400',
        fontSize: 10,
        textAlign: 'center'
    }
})