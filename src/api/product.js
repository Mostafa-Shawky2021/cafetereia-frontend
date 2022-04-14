import axios from "axios";

export const createProductReq = async (data, token) => {
    return axios.post(`http://localhost:5000/api/v1/product/`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }, body: JSON.stringify(data)
    });
};

export const getProductDataReq = async (id) => {
    return axios.get(`http://localhost:5000/api/v1/product/${id}`);
};

export const getUserProductsReq = async (token) => {
    return axios.post(`http://localhost:5000/api/v1/product/userproducts`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

export const getAllProductsData = async () => {
    return axios.get(`http://localhost:5000/api/v1/product/`);
};

export const removeOneProduct = async (id, token) => {
    return axios.delete(`http://localhost:5000/api/v1/product/${id}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

export const updateProductReq = async (id, token, data) => {
    console.log(data);
    return axios.post(`http://localhost:5000/api/v1/product/${id}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }, body: JSON.stringify(data)
    });
};