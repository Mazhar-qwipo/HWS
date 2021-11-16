import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../assets/styles/colors';
import { globalStyle } from '../assets/styles/globalStyle';
import { APP_CONSTANT } from '../constants';
import { Context } from '../GlobalStateStore';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import stateListService, { cityListService, isEmptyValue, validateMobile, validateName } from '../services/commonServices';
import { bloodRequestService } from '../services/bloodDonationDataService';
import * as RootNavigation from '../RootNavigation';

function BloodRequestScreen() {
    const [state, setState] = useContext(Context);
    const [isFirstStepComplete, setIsFirstStepComplete] = useState();
    const [stateList, setStateList] = useState(APP_CONSTANT.selectState);
    const [cityList, setCityList] = useState(APP_CONSTANT.selectCity);

    const [applicant_name, setApplicantName] = useState();
    const [applicant_father_husband_name, setApplicantFatherHusbandName] = useState("");
    const [applicant_address, setApplicantAddress] = useState("");
    const [applicant_mobile, setApplicantMobile] = useState("");
    const [patient_name, setPatientName] = useState("");
    const [patient_age, setPatientAge] = useState("");
    const [patient_father_husband_name, setPatientFatherHusbandName] = useState("");
    const [relation_from_patient, setRelationFromPatient] = useState();
    const [disease, setDisease] = useState("");
    const [patient_address, setPatientAddress] = useState("");
    const [patient_mobile, setPatientMobile] = useState("");
    const [hospital_name, setHospitalName] = useState("");
    const [ward_no, setWardNo] = useState("");
    const [bed_no, setBedNo] = useState("");
    const [stateid, setSelectedState] = useState();
    const [cityid, setSelectedCity] = useState();


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

        if (!validateName(applicant_name)) {
            Alert.alert("Please enter Applicant Name!");
            return;
        }
        if (!validateName(applicant_father_husband_name)) {
            Alert.alert("Please enter Applicant Father/Husband Name!");
            return;
        }
        if (isEmptyValue(applicant_address)) {
            Alert.alert("Please enter Applicant Address!");
            return;
        }
        if (!validateMobile(applicant_mobile)) {
            Alert.alert("Please enter applicant mobile!");
            return;
        }
        if (!validateName(patient_name)) {
            Alert.alert("Please enter Patient Name!");
            return;
        }
        if (isEmptyValue(patient_age)) {
            Alert.alert("Please enter patient age!");
            return;
        }
        if (isEmptyValue(patient_father_husband_name)) {
            Alert.alert("Please enter patient father husband name!");
            return;
        }
        if (isEmptyValue(relation_from_patient)) {
            Alert.alert("Please enter relation with patient!");
            return;
        }
        console.log("request- ", {
            applicant_name, applicant_father_husband_name, applicant_address,
            applicant_mobile, patient_name, patient_age, patient_father_husband_name, relation_from_patient
        });
        setIsFirstStepComplete(true);
    }
    function onClickBack() {
        setIsFirstStepComplete(false);
    }
    async function onClickBloodRequest() {
        if (isEmptyValue(disease)) {
            Alert.alert("Please enter disease!");
            return;
        }
        if (!validateMobile(patient_mobile)) {
            Alert.alert("Please enter patient mobile!");
            return;
        }
        if (isEmptyValue(hospital_name)) {
            Alert.alert("Please enter hospital name!");
            return;
        }
        if (isEmptyValue(stateid)) {
            Alert.alert("Please select state!");
            return;
        }
        if (isEmptyValue(cityid)) {
            Alert.alert("Please select city!");
            return;
        }
        console.log("request- ", {
            applicant_name, applicant_father_husband_name, applicant_address,
            applicant_mobile, patient_name, patient_age, patient_father_husband_name, relation_from_patient
            , disease, patient_address, patient_mobile, hospital_name, ward_no, bed_no, stateid, cityid
        });

        setState({ isLoading: true });
        let reqData = await bloodRequestService({
            applicant_name, 
            applicant_father_husband_name, 
            applicant_address,
            applicant_mobile, 
            patient_name, 
            patient_age, 
            patient_father_husband_name, 
            relation_from_patient, 
            disease, 
            patient_address, 
            patient_mobile, 
            hospital_name, 
            ward_no, 
            bed_no, 
            stateid, 
            cityid
        });
        setState({ isLoading: false });
        if (reqData.status == 200 && !isEmptyValue(reqData.data)) {
            Alert.alert("Request Sent Successfully.");
            clearStatesVariables();

        } else {
            Alert.alert(reqData.message);
        }
    }
    function clearStatesVariables(){
        setApplicantName();
        setApplicantFatherHusbandName("");
        setApplicantAddress("");
        setApplicantMobile("");
        setPatientName("");
        setPatientAge("");
        setPatientFatherHusbandName("");
        setRelationFromPatient("");
        setDisease("");
        setPatientAddress("");
        setPatientMobile("");
        setHospitalName("");
        setWardNo("");
        setBedNo("");
        setSelectedState();
        setSelectedCity();
        setIsFirstStepComplete(false);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sideView}><Text style={globalStyle.heading2}>Create Your Account</Text></View>
            <ScrollView>
                {!isFirstStepComplete ? (
                    <View style={[styles.centerView, { marginTop: 5, marginBottom: 160 }]}>
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Applicant Name"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={applicant_name}
                            onChangeText={
                                (value) => setApplicantName(value)
                            }
                            maxLength={60}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Applicant Father/Husband Name"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={applicant_father_husband_name}
                            onChangeText={
                                (value) => setApplicantFatherHusbandName(value)
                            }
                            maxLength={60}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Applicant Address"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={applicant_address}
                            onChangeText={
                                (value) => setApplicantAddress(value)
                            }
                            maxLength={250}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Applicant Mobile"
                            value={applicant_mobile}
                            placeholderTextColor={COLORS.placeholderColor}
                            keyboardType="phone-pad"
                            selectionColor={COLORS.selectionColor}
                            onChangeText={
                                (value) => setApplicantMobile(value)
                            }
                            maxLength={10}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Patient Name"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={patient_name}
                            onChangeText={
                                (value) => setPatientName(value)
                            }
                            maxLength={60}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Patient Age"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="number-pad"
                            value={patient_age}
                            onChangeText={
                                (value) => setPatientAge(value)
                            }
                            maxLength={2}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Patient Father/Husband Name"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={patient_father_husband_name}
                            onChangeText={
                                (value) => setPatientFatherHusbandName(value)
                            }
                            maxLength={60}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Relation With Patient"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={relation_from_patient}
                            onChangeText={
                                (value) => setRelationFromPatient(value)
                            }
                            maxLength={100}
                        />




                        <TouchableOpacity style={[globalStyle.btnBlack, globalStyle.btnLarge]} onPress={() => onClickNext()}>
                            <Text style={globalStyle.btnText}>Next</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <View style={[styles.centerView, { marginBottom: 100 }]}>
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Disease"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={disease}
                            onChangeText={
                                (value) => setDisease(value)
                            }
                            maxLength={100}
                        />


                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Patient Address"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={patient_address}
                            onChangeText={
                                (value) => setPatientAddress(value)
                            }
                            maxLength={250}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Patient Mobile No."
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="phone-pad"
                            value={patient_mobile}
                            onChangeText={
                                (value) => setPatientMobile(value)
                            }
                            maxLength={10}
                        />
                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Hospital Name"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={hospital_name}
                            onChangeText={
                                (value) => setHospitalName(value)
                            }
                            maxLength={150}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Ward No"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={ward_no}
                            onChangeText={
                                (value) => setWardNo(value)
                            }
                            maxLength={20}
                        />

                        <TextInput style={globalStyle.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Bed No"
                            placeholderTextColor={COLORS.placeholderColor}
                            selectionColor={COLORS.selectionColor}
                            keyboardType="name-phone-pad"
                            value={bed_no}
                            onChangeText={
                                (value) => setBedNo(value)
                            }
                            maxLength={3}
                        />
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

                        <View style={[globalStyle.marginBottom1, globalStyle.row]}>
                            <TouchableOpacity style={[globalStyle.btnBlack, globalStyle.btnMediun]} onPress={() => onClickBack()}>
                                <Text style={globalStyle.btnText}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[globalStyle.btnBlack, , globalStyle.btnMediun]} onPress={() => onClickBloodRequest()}>
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
export default BloodRequestScreen