import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from './colors';
export const profileStyle = StyleSheet.create({
    header:{
        backgroundColor: COLORS.themeColor,
        height:300,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:230,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.white,
      },
      nameLetter:{
        fontSize:70,
        color:COLORS.themeColor,
        fontWeight:'600',
        
      },
      name:{
        fontSize:22,
        color:"#000",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
    });