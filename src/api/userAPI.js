import axios from "axios";

// const domain = "http://cafeteria.elfabrikaa.online/Cafetria2";
const domain = "http://localhost:80/c/v3";

export const addUserAPI = async (user, token) => {
    console.log(token);
    console.log(user);
    return axios.post(`${domain}/api/v1/client/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      name: "addClient",
      param: {
        name: user.name,
        email: user.email,
        pass: user.pass
      },
    });
  };

  export const getLastUser = async (token) => {
    console.log(token);
    return axios.post(`${domain}/api/v1/client/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      name: "getTheLastClient",
      param: {},
    });
  };

  export const updateUserAvatar = async (id, formData, token) => {
    console.log(token);
    return axios.post(`${domain}/api/v1/client/upload_avatar.php?id=${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      }
    });
  };

  export const updateUserAPI = async (user, token) => {
    console.log(token);
    return axios.post(`${domain}/api/v1/client/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      name: "updateClient",
      param: {
        id: user.id,
        name: user.name,
        email: user.email,
        pass: user.pass
      },
    });
  };

  export const getUserById = async (id, token) => {
    console.log(id);
    console.log(token);
    return axios.post(`${domain}/api/v1/client/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      name: "getClientDetails",
      param: {id: id},
    });
  };

  export const deleteUser = async (id, token) => {
    console.log(token);
    return axios.post(`${domain}/api/v1/client/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      name: "deleteClient",
      param: {id},
    });
  };