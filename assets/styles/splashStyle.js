import { StyleSheet } from 'react-native'
import { COLORS } from './colors'
export const splashStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        height: 215,
        width: 235,
    },
    splashHeading1: {
        fontSize: 60,
        fontWeight: '500',
        color: '#FFF',
    },
    splashHeading2: {
        paddingTop:20,
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF',
    }
})