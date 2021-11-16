import { APP_CONSTANT } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage'
export const setDetail = (detail) => {
    console.log("detailValue- ", detail);
    if (!(detail == null || detail == undefined)) {
        AsyncStorage.setItem(APP_CONSTANT.keySharesPref,JSON.stringify(detail));
        console.log("detail Set");
    } else {
        console.log("detail not Set.");
    }
}
export const getDetail = () => {
    return AsyncStorage.getItem(APP_CONSTANT.keySharesPref);
}
export const isSetUserDetail = () => {
    try {
        let item=AsyncStorage.getItem(APP_CONSTANT.keySharesPref);
            if (!(item == null || item == undefined || item == '')) {
                return true;
            } else {
                return false;
            }

    } catch (e) {
        return false;
    }

}
export const clearUserDetail = async () => {
    try {
        await AsyncStorage.removeItem(APP_CONSTANT.keySharesPref);
        return 'Logged Out';
    } catch (e) {
        return e;
    }

    console.log('Clear Done.')
}
export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }

    console.log('Clear Done.')
}