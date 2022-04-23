import axios from "axios";
const domain = "http://cafeteria.elfabrikaa.online/Cafetria2";
export const loginUser = async (credentials) => {
  console.log(JSON.stringify(credentials));
  return axios.post(`${domain}/api/v1/user/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

export const fetchUserData = async (token) => {
  return axios.get(`${domain}/api/v1/user/`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const signUpUser = async (data) => {
    const newData = axios.post(`${domain}/api/v1/user/signup`, {
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
    return axios.post(`${domain}/api/v1/user/avatar`, formData, 
    { headers: { "Content-Type": "multipart/form-data", authorization: `Bearer ${token}` }})  
};

export const fetchSpecificUserData = async (id) => {
    return axios.post(`${domain}/api/v1/user/product-owner/${id}`);
  };
