import axios from "axios";

export const getProducts = async (limit: number, offset: number, query: string, minPrice: number, maxPrice: number) => {
    try {
        const res = await axios.get(`${`${process.env.PRODUCTS_API}/?&offset=${offset}&limit=${limit}&title=${query}&price_min=${minPrice}&price_max=${maxPrice}`}`)
        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch projects data");
    }
}