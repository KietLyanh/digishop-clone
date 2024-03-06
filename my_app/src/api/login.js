import axiosClient from "./axiosClient";

const login = {
    getLogin: (params) => {
        const url = '/loginusers';
        return axiosClient.get(url,{params});
    }
}
export default login;