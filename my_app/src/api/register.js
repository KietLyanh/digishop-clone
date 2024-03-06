
import axiosClient from "./axiosClient";

const register = {
    postRegister: (params) => {
        const url = '/registeruser';
        return axiosClient.post(url,{params});
    }
}
export default register;    