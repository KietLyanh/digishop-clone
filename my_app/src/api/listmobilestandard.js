import axiosClient from "./axiosClient";

const Listmobilestandard = {
    getByparam : (params) => {
        const url = '/listmobilestandard?';
        return axiosClient.get(url,{params}); 
    },
    getByName : (params) => {
        const url = '/getmobilestandardbyname?';
        return axiosClient.get(url,{params});
    },
    getChildByDate : (params) => {
        const url = '/getmobilechildbydate?';
        return axiosClient.get(url,{params});
    }
}   
export default Listmobilestandard;