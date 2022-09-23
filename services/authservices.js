import axios from "axios";
import { APP_CONSTANT } from "../constants";
import commonResponse from '../models/commonModels'


const login = async (loginObj) => {

    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apilogin;
    console.log("url- ", url);
    await axios
        .post(url, loginObj)
        .then(function (response) {
            console.log("response---- ",response);
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
            commonResponse.message = error;
            console.log("login error- ",error);
        });
    return commonResponse;
};

export default login;

export const changePassword = async (Obj) => {
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.changePpassowrd;
    await axios
        .post(url, Obj)
        .then(function (response) {
            if (response.status == 200) {
                commonResponse.data = response.data;
                commonResponse.status = response.status;
                commonResponse.message = "Success";
            } else {
                commonResponse.data = [];
                commonResponse.status = response.status;
                commonResponse.message = response.message;
            }
        })
        .catch(function (error) {
            commonResponse.data = [];
            commonResponse.status = 404;
            commonResponse.message = "Failed";
            console.log("change pass url- ",url);
            console.log("change pass data- ",Obj);
            console.log("change pass error- ",error);
        });
    return commonResponse;
};