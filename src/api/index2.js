import axios from "axios";

// Login
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

export const getClientById = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/client/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getClientDetails",
    param: {id: id},
  });
};

// User Home
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

// User Orders
export const getUserOrders = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/order/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getOrdersByClientId",
    param: {customer_id: id},
  });
};

export const cancelOrder = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/order/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "deleteOrder",
    param: {id: id},
  });
};

export const getOrderProducts = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/order/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getProductsDetailsOfSpecificOrder",
    param: {order_id: id},
  });
};

export const getOrderProductsOfOrder = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/order/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getProductsOrderOfSpecificOrder",
    param: {order_id: id},
  });
};

export const getProductById = async (id, token) => {
  console.log(id);
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/prod/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getProdDetails",
    param: {id: id},
  });
};

export const getAllUsers = async (token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/client/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getAllClients",
    param: {},
  });
};

export const getSpecificUser = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/client/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getClientDetails",
    param: {id: id},
  });
};

export const changeProductStatus = async (id, status, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/prod/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "updateProdStatus",
    param: {id, status},
  });
};

export const deleteProduct = async (id, token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/prod/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getProdDetails",
    param: {id},
  });
};

export const getCategories = async (token) => {
  console.log(token);
  return axios.post("http://cafeteria.elfabrikaa.online/Cafetria2/api/v1/cat/", {
    headers: {
      "Content-Type": "application/js",
      "Authorization": `Bearer ${token}`,
    },
    name: "getAllCategories",
    param: {},
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
