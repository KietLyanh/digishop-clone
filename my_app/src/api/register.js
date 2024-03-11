
import axiosClient from "./axiosClient";

const register = {
    postRegister: (userRegister) => {
        const url = '/registeruser';
        return axiosClient.post(url,userRegister);
    }
}
export default register;    