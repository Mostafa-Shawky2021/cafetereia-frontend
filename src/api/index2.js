import axios from "axios";

export const loginUser = async (credentials) => {
  console.log(JSON.stringify(credentials));
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/client/", {
    headers: {
      "Content-Type": "application/json",
    },
    name: "generateToken",
    param: JSON.stringify(credentials),
  });
};

export const verifyClientRole = async (token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/client/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getClientByToken",
    param: {},
  });
};

export const getAllProds = async (token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/prod/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getAllProds",
    param: {},
  });
};

export const getUserLastOrderProds = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/order/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getProductsDetailsOfLastOrderByClientId",
    param: {customer_id: id},
  });
};

export const addOrderfromUser = async (id, price, products, note, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/order/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "addOrder",
    param: {
      customer_id: id,
      price: price,
      note: note,
      data: products,
    },
  });
};

export const fetchUser = async (token) => {
  // return axios.post("http://localhost/Cafetria/api/v1/client/", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${token}`,
  //   },
  //   name: "generateToken",
  //   param: JSON.stringify(credentials),
  // });
};

export const fetchUserData = async (token) => {
  return axios.get(`http://localhost:5000/api/v1/user/`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const signUpUser = async (data) => {
    const newData = axios.post(`http://localhost:5000/api/v1/user/signup`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    console.log(data);
    console.log(newData);

    return newData;
};

export const updateProfileAvatar = async (token, formData) => {
console.log("ello Form Data: ", formData);
    return axios.post(`http://localhost:5000/api/v1/user/avatar`, formData, 
    { headers: { "Content-Type": "multipart/form-data", authorization: `Bearer ${token}` }})  
};

export const fetchSpecificUserData = async (id) => {
    return axios.post(`http://localhost:5000/api/v1/user/product-owner/${id}`);
  };
