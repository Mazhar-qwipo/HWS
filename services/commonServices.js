import axios from "axios";
import { APP_CONSTANT } from "../constants";
import commonResponse from '../models/commonModels'


const stateListService = async () => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apistateList;
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
export default stateListService;

export const cityListService = async (stateid) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apicityList + stateid;
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
export const newsListService = async () => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apiNewsList;
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

export const isEmptyValue = (data) =>
    (data == null || data == '' || data == '0' || data == 0 || data == undefined) ? true : false
    ;

export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
export const validateName = (name) => {
    var re = /^[a-zA-Z ]{2,40}$/;
    return re.test(name);
};
export const validateMobile = (mobile) => {
    var re = /^[0]?[6789]\d{9}$/;
    return re.test(mobile);
};
export const validatePassword = (mobile) => {
    var re = /^.{3,20}$/;
    return re.test(mobile);
};