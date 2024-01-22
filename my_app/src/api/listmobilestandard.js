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
    getPackagesByDate : (params) => {
        const url = '/getpackagesbydate?';
        return axiosClient.get(url,{params});
    },
    getAllPackages: (params) => {
        const url = '/getallpackages';
        return axiosClient.get(url,{params});
    }

}   
export default Listmobilestandard;