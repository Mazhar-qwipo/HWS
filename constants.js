export const APP_CONSTANT = {
    baseUrl: 'https://hbd.capitalgoindia.com',
    keySharesPref: 'userData',
    apigetpage: "/api/getpage/",
    apicoordinatorList: "/api/coordinator-list/",
    apibloodbankList: "/api/bloodbank-list",
    apilogin: "/api/login",
    apiuserProfile: "/api/user-profile",
    apidonorDetail: "/api/donor-detail",
    apiblooddonationhistory: "/api/blooddonationhistory",
    apistateList: "/api/state-list",
    apicityList: "/api/city-list/",
    apiNewsList: "/api/newslist",
    apiuserRegistration: "/api/user-registration",
    apibloodRequest: "/api/blood-request",
    apiupdateDonor: "/api/update-donor",
    changePpassowrd: "/api/change-passowrd",

    dummyList: [
        {
            itemName: "Samsung M20"
        },
        {
            itemName: "Nokia"
        },
        {
            itemName: "Apple"
        },
        {
            itemName: "Samsung M23"
        },
        {
            itemName: "Samsung M24"
        },
        {
            itemName: "Samsung M25"
        }
    ],
    maritalStatus: [
        {
            key: "0", value: "Select Marital Status"
        },
        {
            key: "Married", value: "Married"
        },
        {
            key: "Unmarried", value: "Unmarried"
        }

    ],
    genders: [
        {
            key: '0', value: 'Select Gender'
        },
        {
            key: 'Male', value: 'Male'
        },
        {
            key: 'Female', value: 'Female'
        }
    ],
    bloodGroup: [
        {
            key: '0', value: 'Select Blood Group'
        },
        {
            key: '1', value: 'A+'
        },
        {
            key: '2', value: 'O+'
        },
        {
            key: '3', value: 'B+'
        },
        {
            key: '4', value: 'AB+'
        },
        {
            key: '5', value: 'A-'
        },
        {
            key: '6', value: 'O-'
        },
        {
            key: '7', value: 'B-'
        },
        {
            key: '8', value: 'AB-'
        }
    ],
    selectState: [
        {
            created_at: "2021-01-01 23:01:48",
            id: 0,
            state_name: "Select State",
            status: 1,
            updated_at: "2021-01-01 23:01:48",
        }
    ],
    selectCity: [
        {
            created_at: "2021-01-01 23:01:48",
            id: 0,
            city_name: "Select City",
            state_id: 0,
            status: 1,
            updated_at: "2021-01-01 23:01:48",
        }
    ],
    howToDone: [
        {
            key: '0', value: 'How To Done'
        },
        {
            key: 'Self', value: 'Self'
        },
        {
            key: 'Camp', value: 'Camp'
        }
    ],
}