import axiosClient from "./axiosClient";

const Listsim = {
    getByParams: (params) => {
        const url = '/listsimname';
        return axiosClient.get(url,{params});
    }
}
export default Listsim;