import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import { Context } from './GlobalStateStore';
const Loader = (props) => {
    let isLoading=false;
    const [state,setState]=useContext(Context);
    //const { loading } = props;
    isLoading=state.isLoading;
    return (
        <Modal transparent={true} animationType={'none'} visible={isLoading}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator animating={isLoading} size="small" color={'green'} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#fff',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});
export default Loader;