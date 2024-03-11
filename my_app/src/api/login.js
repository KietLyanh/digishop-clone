import axiosClient from "./axiosClient";

const login = {
    postLogin: (userLogin) => {
        const url = '/loginusers';
        return axiosClient.post(url,userLogin);
    }
}
export default login;