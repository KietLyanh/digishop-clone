import axiosClient from "./axiosClient";

const Listmobilestandard = {
    getByparam : (params) => {
        const url = '/listmobilestandard?';
        return axiosClient.get(url,{params}) 
    }
}   
export default Listmobilestandard;