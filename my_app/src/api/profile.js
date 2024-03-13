import axiosClient from "./axiosClient";

const profile = {
    postProfile: (userProfile) => {
        const url = '/profileupdate';
        return axiosClient.post(url,userProfile);
    }
}
export default profile;    