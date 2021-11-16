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
        height: 170,
        width: 170,
    },
    splashHeading1: {
        fontSize: 60,
        fontWeight: '500',
        color: '#FFF',
    },
    splashHeading2: {
        fontSize: 28,
        fontWeight: '500',
        color: '#FFF',
    }
})