import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../assets/styles/colors';
import { globalStyle } from '../assets/styles/globalStyle';
import { RadioButton } from 'react-native-paper';
import { APP_CONSTANT } from '../constants';
import { Context } from '../GlobalStateStore';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import stateListService, { cityListService, isEmptyValue, validateEmail, validateMobile, validateName, validatePassword } from '../services/commonServices';
import { updateDonorService, userRegistrationService } from '../services/bloodDonationDataService';
import * as RootNavigation from '../RootNavigation';

function SignUpScreen({ navigation: { navigate } }) {
    const [state, setState] = useContext(Context);
    const [isRegister, setRegister] = useState();
    const [stateList, setStateList] = useState(APP_CONSTANT.selectState);
    const [cityList, setCityList] = useState(APP_CONSTANT.selectCity);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [gender, setGender] = useState('Male');
    const [password, setPassword] = useState();
    const [stateid, setSelectedState] = useState();
    const [cityid, setSelectedCity] = useState();
    const [blood_group_id, setSelectedBloodGroup] = useState();
    const [age, setAge] = useState('18');
    const [marital_status, setSelectedMaritalStatus] = useState();
    const [father_husband_name, setFatherHusbandName] = useState("");
    const [address, setAddress] = useState("");
    const [education, setEducation] = useState("");
    const [experiance, setExperiance] = useState("");
    const [business_job, setBusinessJob] = useState("");
    const [office_address, setOfficeAddress] = useState("");
    const [designation, setDesignation] = useState("");
    const [other_details, setOtherDetails] = useState("");

    async function getStateListFn() {
        setState({ isLoading: true });
        let sls = await stateListService();
        setState({ isLoading: false });
        //console.log("lr-", sls.data);
        if (sls.status == 200 && sls.data.length > 0) {
            const mergestatelist = [...APP_CONSTANT.selectState, ...sls.data];
            setStateList(mergestatelist);
        } else {
            setStateList(APP_CONSTANT.selectState);
        }
    }
    async function getCityListFn(statid) {
        if (!isEmptyValue(statid)) {
            setState({ isLoading: true });
            let sls = await cityListService(statid);
            setState({ isLoading: false });
            if (sls.status == 200 && sls.data.length > 0) {
                //console.log(sls.data);
                const mergestatelist = [...APP_CONSTANT.selectCity, ...sls.data];
                setCityList(mergestatelist);
            } else {
                setCityList(APP_CONSTANT.selectCity);
            }
        } else {
            setCityList(APP_CONSTANT.selectCity);
        }

    }
    useEffect(() => {
        getStateListFn();
    }, []);

   
    function onClickNext() {
        console.log("inputValue", { name, email, contact, gender, password, stateid, cityid });
        if (!validateName(name)) {
            Alert.alert("Please enter your full name and name should be valid!");
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert("Please enter valid email!");
            return;
        }
        if (!validateMobile(contact)) {
            Alert.alert("Please enter valid 10 digit mobile number!");
            return;
        }
        if (!validatePassword(password)) {
            Alert.alert("Please enter minimum 3 characters!");
            return;
        }
        if (isEmptyValue(stateid)) {
            Alert.alert("Please select state!-" + stateid);
            console.log("----stateid", stateid);
            return;
        }
        if (isEmptyValue(cityid)) {
            Alert.alert("Please select state!");
            return;
        }

        setRegister(true);
    }
    function onClickBack() {
        setRegister(false);
    }
    async function onClickRegister() {
        if (isEmptyValue(blood_group_id)) {
            Alert.alert("Please select Blood group!");
            return;
        }
        if (isEmptyValue(marital_status)) {
            Alert.alert("Please select marital status!");
            return;
        }
        if (isEmptyValue(father_husband_name)) {
            Alert.alert("Please enter father/husband name!");
            return;
        }
        if (isEmptyValue(age)) {
            Alert.alert("Please enter age!");
            return;
        }
        if (isEmptyValue(education)) {
            Alert.alert("Please enter education!");
            return;
        }
        if (isEmptyValue(business_job)) {
            Alert.alert("Please enter Business/Job!");
            return;
        }

        console.log("inputValue", { blood_group_id, marital_status, father_husband_name, age, address, education, experiance, business_job, office_address, designation, other_details });

        setState({ isLoading: true });
        let regData = await userRegistrationService({ name, email, contact, gender, password, stateid, cityid });
        setState({ isLoading: false });
        if (regData.status == 200 && !isEmptyValue(regData.data)) {
            let updateRegData = await updateDonorService({ userId:regData.data.id,stateid,cityid,name,blood_group_id, marital_status, father_husband_name, age, address, education, experiance, business_job, office_address, designation, other_details });
            setState({ isLoading: false });
            if (updateRegData.status == 200 && !isEmptyValue(updateRegData.data)) {
                Alert.alert("Registration Successfull!");
                RootNavigation.navigate('SignInScreen');
            } else {
                Alert.alert(updateRegData.message);
            }
        } else {
            Alert.alert(regData.message);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sideView}><Text style={globalStyle.heading2}>Create Your Account</Text></View>
            <ScrollView>
                {!isRegister ? (
                    <View style={[styles.centerView, { marginTop: 40 }]}>
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Name"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={name}
                            onChangeText={
                                (value) => setName(value)
                            }
                            maxLength={50}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Contact"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="number-pad"
                            value={contact}
                            onChangeText={
                                (value) => setContact(value)
                            }
                            maxLength={10}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Email"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={
                                (value) => setEmail(value)
                            }
                            maxLength={100}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Password"
                            value={password}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            onChangeText={
                                (value) => setPassword(value)
                            }
                        />
                        <View style={globalStyle.row}>
                            <Text style={globalStyle.linkText}>Gender</Text>
                            <RadioButton
                                value="Male"
                                uncheckedColor={COLORS.radioWhite}
                                color={COLORS.radioWhite}
                                status={gender === 'Male' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('Male')}
                            />
                            <Text style={globalStyle.radioLabel}>Male</Text>
                            <RadioButton
                                value="Female"
                                uncheckedColor={COLORS.radioWhite}
                                color={COLORS.radioWhite}
                                status={gender === 'Female' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('Female')}
                            />
                            <Text style={globalStyle.radioLabel}>Female</Text>
                        </View>

                        <View style={globalStyle.inputSelectWraper}>
                            <Picker
                                itemStyle={globalStyle.inputSelectItem}
                                mode="dropdown"
                                style={globalStyle.inputSelect}
                                selectedValue={stateid}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedState(itemValue);
                                    setSelectedCity(0);
                                    getCityListFn(itemValue);
                                }
                                }
                            >
                                {stateList.map((item, index) => (
                                    <Picker.Item
                                        label={item.state_name}
                                        value={item.id}
                                        index={index}
                                        key={item.id}
                                    />
                                ))}
                            </Picker>
                        </View>
                        <View style={globalStyle.inputSelectWraper}>
                            <Picker
                                itemStyle={globalStyle.inputSelectItem}
                                mode="dropdown"
                                style={globalStyle.inputSelect}
                                selectedValue={cityid}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedCity(itemValue);
                                }
                                }
                            >
                                {cityList.map((item, index) => (
                                    <Picker.Item
                                        label={item.city_name}
                                        value={item.id}
                                        index={index}
                                        key={index}
                                    />
                                ))}
                            </Picker>
                        </View>

                        <TouchableOpacity style={[globalStyle.btnBlack, globalStyle.btnLarge]} onPress={() => onClickNext()}>
                            <Text style={globalStyle.btnText}>Next</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <View style={[styles.centerView, { marginBottom: 40 }]}>
                        <View style={globalStyle.inputSelectWraper}>
                            <Picker
                                itemStyle={globalStyle.inputSelectItem}
                                mode="dropdown"
                                style={globalStyle.inputSelect}
                                selectedValue={blood_group_id}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedBloodGroup(itemValue);
                                }}
                            >
                                {APP_CONSTANT.bloodGroup.map((item, index) => (
                                    <Picker.Item
                                        label={item.value}
                                        value={item.key}
                                        index={index}
                                        key={index}
                                    />
                                ))}
                            </Picker>
                        </View>
                        <View style={globalStyle.inputSelectWraper}>
                            <Picker
                                itemStyle={globalStyle.inputSelectItem}
                                mode="dropdown"
                                style={globalStyle.inputSelect}
                                selectedValue={marital_status}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedMaritalStatus(itemValue);
                                }}
                            >
                                {APP_CONSTANT.maritalStatus.map((item, index) => (
                                    <Picker.Item
                                        label={item.value}
                                        value={item.key}
                                        index={index}
                                        key={index}
                                    />
                                ))}
                            </Picker>
                        </View>

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Father/Husband"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={father_husband_name}
                            onChangeText={
                                (value) => setFatherHusbandName(value)
                            }
                            maxLength={50}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Age"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="number-pad"
                            value={age}
                            onChangeText={
                                (value) => setAge(value)
                            }
                            maxLength={2}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Address"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={address}
                            onChangeText={
                                (value) => setAddress(value)
                            }
                            maxLength={250}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Education"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={education}
                            onChangeText={
                                (value) => setEducation(value)
                            }
                            maxLength={250}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Experiance"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={experiance}
                            onChangeText={
                                (value) => setExperiance(value)
                            }
                            maxLength={250}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Business/Job"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={business_job}
                            onChangeText={
                                (value) => setBusinessJob(value)
                            }
                            maxLength={250}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Office Address"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={office_address}
                            onChangeText={
                                (value) => setOfficeAddress(value)
                            }
                            maxLength={250}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Designation"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            value={designation}
                            onChangeText={
                                (value) => setDesignation(value)
                            }
                            maxLength={250}
                        />
                        <View style={[globalStyle.marginBottom1, globalStyle.row]}>
                            <TouchableOpacity style={[globalStyle.btnBlack, globalStyle.btnMediun]} onPress={() => onClickBack()}>
                                <Text style={globalStyle.btnText}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[globalStyle.btnBlack, , globalStyle.btnMediun]} onPress={() => onClickRegister()}>
                                <Text style={globalStyle.btnText}>Submit</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            </ScrollView>
        </SafeAreaView >
    );


}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.themeColor
    },
    centerView: {
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideView: {
        padding: 20,
        alignItems: 'flex-start',
    },
});

export default SignUpScreen