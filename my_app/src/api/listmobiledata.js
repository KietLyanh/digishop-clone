import axiosClient from "./axiosClient";

const listmobiledata = {
    getAll: () => {
        const url = '/listmobiledata';
        return axiosClient.get(url);
    }
}
export default listmobiledata;