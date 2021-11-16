import axios from "axios";
import { APP_CONSTANT } from "../constants";
import commonResponse from '../models/commonModels'

export const getBloodBanks = async (pagename) => {

    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apibloodbankList;
    await axios
        .get(url)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = "Data Not Found.";
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
        });
    return commonResponse;
};

export default getBloodBanks;

export const getCoordinators = async (id) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apicoordinatorList + id;
    await axios
        .get(url)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = "Data Not Found.";
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
        });
    return commonResponse;
};

export const getBloodDonationHistory = async (historyObj) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apiblooddonationhistory;
    await axios
        .post(url, historyObj)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = "Data Not Found.";
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
        });
    return commonResponse;
};
export const userRegistrationService = async (regObj) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apiuserRegistration; 
    console.log("url:",url);
    console.log("regObj:",regObj);
    await axios
        .post(url, regObj)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = "Data Not Found.";
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
            console.log("error:",error);        
        });
    return commonResponse;
};
export const updateDonorService = async (regObj) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apiupdateDonor; 
    console.log("url:",url);
    console.log("updObj:",regObj);
    await axios
        .post(url, regObj)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = "Data Not Found.";
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
            console.log("error:",error);        
        });
    return commonResponse;
};

export const bloodRequestService = async (reqObj) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apibloodRequest; 
    console.log("url:",url);
    console.log("reqObj:",reqObj);
    await axios
        .post(url, reqObj)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = "Data Not Found.";
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
            console.log("error:",error);        
        });
    return commonResponse;
};

