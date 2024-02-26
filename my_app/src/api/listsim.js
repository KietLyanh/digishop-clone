import axiosClient from "./axiosClient";

const Listsim = {
    getAll: () => {
        const url = '/listsimname';
        return axiosClient.get(url);
    }
}
export default Listsim;