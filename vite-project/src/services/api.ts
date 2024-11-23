import axios from "axios"

const BASE_URL = "https://dummyjson.com";

export const fetchProduct = async ()=>{
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data
};