import axios from "axios";
const apiEndPoint = 'http://34.130.14.157:8000/user/';



export const Login = async (data) => {
    // console.log(data);
    try {
        const response = await axios.post(apiEndPoint + "signinapi/", data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const Signup = async (data) => {
    // console.log(data);
    try {
        const response = await axios.post(apiEndPoint + "signupapi/", data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const createProfile = async (data) => {
    // console.log(data);
    try {
        const response = await axios.post(apiEndPoint + "artist_profile_create_api/", data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const socialLogin = async (data) => {
    // console.log(data);
    try {
        const response = await axios.post(apiEndPoint + "google_signinapi/", data);
        return response;
    } catch (error) {
        console.log(error);
    }
};