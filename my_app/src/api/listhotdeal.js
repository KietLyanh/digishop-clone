import axiosClient from "./axiosClient";

const Listhotdeal = {
    getAll: () => {
        const url = '/listhotdeal';
        return axiosClient.get(url);
    }
}

export default Listhotdeal;