import axios from "axios";
import { APP_CONSTANT } from "../constants";
import commonResponse from '../models/commonModels'

 const getPage = async (pagename) => {
    
    let url = APP_CONSTANT.baseUrl + APP_CONSTANT.apigetpage+pagename;
    console.log("url- ", url);
     await axios
        .get(url)
        .then(function (response) {
            if(response.status==200){
                commonResponse.data= response.data;
                commonResponse.status= response.status;
                commonResponse.message= "Success";
            }else{
                commonResponse.data= [];
                commonResponse.status= response.status;
                commonResponse.message= "Data Not Found.";
            }
        })
        .catch(function (error) {
                commonResponse.data= [];
                commonResponse.status= 404;
                commonResponse.message= "Failed";
        });
        return commonResponse;
};

export default getPage;