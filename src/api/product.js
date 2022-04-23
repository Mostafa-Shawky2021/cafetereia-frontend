import axios from "axios";
const domain = "http://cafeteria.elfabrikaa.online/Cafetria2";
export const createProductReq = async (data, token) => {
    return axios.post(`${domain}/api/v1/product/`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }, body: JSON.stringify(data)
    });
};

export const getProductDataReq = async (id) => {
    return axios.get(`${domain}/api/v1/product/${id}`);
};

export const getUserProductsReq = async (token) => {
    return axios.post(`${domain}/api/v1/product/userproducts`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

export const getAllProductsData = async () => {
    return axios.get(`${domain}/api/v1/product/`);
};

export const removeOneProduct = async (id, token) => {
    return axios.delete(`${domain}/api/v1/product/${id}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

export const updateProductReq = async (id, token, data) => {
    console.log(data);
    return axios.post(`${domain}/api/v1/product/${id}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }, body: JSON.stringify(data)
    });
};