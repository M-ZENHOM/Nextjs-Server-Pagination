import axios from "axios";

export const getProducts = async (limit: number, offset: number, query: string, minPrice: number, maxPrice: number) => {
    try {
        const res = await axios.get(`${`https://api.escuelajs.co/api/v1/products/?&offset=${offset}&limit=${limit}&title=${query}&price_min=${minPrice}&price_max=${maxPrice}`}`)
        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch projects data");
    }
}