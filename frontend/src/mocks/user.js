import axios from 'axios';

class UserAPI {
  async getUserDetails( ) {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo")).token;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${import.meta.env.BASEURL}/api/users/`, config);
      return data;
    } catch (error) {
      throw error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;
    }
  }

  async createUser(name, email, password) {
    try {
 
      const config = {
        headers: {
          'Content-Type': 'application/json',
         
        }
      };
  
      const { data } = await axios.post(`${import.meta.env.BASEURL}/api/users/register/`, { name, email, password }, config);
      return data;
    } catch (error) {
      throw error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;
    }
  }
  

  async updateUser(userId, updateData) {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo")).token;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(`${import.meta.env.BASEURL}/api/users/profile/update/`, updateData, config);
      return data;
    } catch (error) {
      throw error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;
    }
  }

  async deleteUser(userId) {
    try {
      const token = JSON.parse(localStorage.getItem("userInfo")).token;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`${import.meta.env.BASEURL}/api/users/delete/${userId}/`, config);
    } catch (error) {
      throw error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;
    }
  }

  async login(email, password) {
    try {
      const { data } = await axios.post(`${import.meta.env.BASEURL}/api/users/login/`,{ username: email, password: password });
      return data;
    } catch (error) {
      throw error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;
    }
  }
}

const userAPI = new UserAPI();

export default userAPI;