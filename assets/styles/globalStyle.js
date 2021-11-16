import { View, Text, StyleSheet, Image } from 'react-native'
import { APP_CONSTANT } from '../../constants'
import { COLORS } from './colors'
export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.themeColor
    },
    themeColor: {
        backgroundColor: COLORS.themeColor
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.spinner,
    },
    headingContainer: {
        marginTop: 100,
        marginBottom: 70,
    },
    heading1: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center'
    },
    heading2: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center'
    },
    heading3: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 40,
        textAlign: 'center'
    },
    subHeading1: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center'
    },
    smallNoteText: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 14,
    },
    tabNavigationBarStyle: {
        backgroundColor: '#FFF',
        width: '90%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        overflow: 'hidden', 
        left: 20,
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.9)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#000',
        marginVertical: 10,
        fontSize: 14,
    },
    inputSelectWraper: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#bdc3c7',
        overflow: 'hidden',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
    },
    inputSelect: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.9)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#000',
        fontSize: 14,
    },
    inputSelectItem: {
        color: COLORS.black
    },
    btnBlack: {
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        marginLeft: 5,
        marginRight: 5,
        paddingVertical: 13
    },
    btnSmall: {
        width: 80,
    },
    btnMediun: {
        width: 140,
    },
    btnLarge: {
        width: 300,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    linkText: {
        color: COLORS.linkWhite,
        paddingRight: 5,
        fontSize: 16,
    },
    txtUnderline: {
        textDecorationLine: 'underline'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    rowText: {
        flexDirection: "row",
        flexWrap: "wrap",
        //justifyContent: 'space-between'
    },
    stickBottom:{
        position: 'absolute',
        bottom:0,
    },
    pullCenter:{
        alignContent: 'center',
    },
    radioLabel: {
        color: '#fff',
        marginTop: 5,
        marginRight: 10,
    },
    pageHeader: {
        backgroundColor: COLORS.themeColor,
    },
    pageHeading: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 3,
    },
    pageTitleBar: {
        paddingTop: 10,
        paddingRight: 30,
        paddingBottom: 10,
        paddingLeft: 30,
        height: 100,
        alignItems: 'flex-start',
        flex: 3
    },
    listPageTitleBar: {
        paddingTop: 25,
        paddingRight: 30,
        paddingBottom: 10,
        paddingLeft: 30,
        height: 100,
        alignItems: 'flex-start',
        flex: 3
    },
    listPageHeading: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 22,
        textAlign: 'center',
        letterSpacing: 3,
    },
    pageIcon: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    pageIconImage: {
        width: 90,
        height: 90,
    },
    pageImage: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1 // Your aspect ratio
    },
    pageDetail: {
        color: COLORS.pagetextcolor,
        fontSize: 16,
        padding: 20,
    },
    pagrScrollView: {
        marginHorizontal: 5,
    },
    marginBottom1: {
        marginBottom: 70
    },
    marginBottom2: {
        marginBottom: 80
    },
    marginBottom3: {
        marginBottom: 90
    },
    marginBottom4: {
        marginBottom: 100
    },
    marginBottom5: {
        marginBottom: 110
    },
    marginTop1: {
        marginTop: 70
    },
    margin20: {
        marginTop: 20
    },
    listCard: {
        borderRadius: 2,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 1,
        marginLeft: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    bloodBankName: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.black,
        marginBottom:5
    },
    bloodBankContact: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.blackLight
    },
    bloodBankAdd: {
        fontSize: 14,
        color: COLORS.blackLight
    },
    label:{
        fontWeight:16,
        fontWeight:'700',
        color:COLORS.black
    }
})