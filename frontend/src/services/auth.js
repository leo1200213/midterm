import api from "./axiosClient";

export const auth = {
  async getCsrf() {
    const {
      data: { csrfToken },
    } = await api.get("/users/csrf-token");
    return { csrfToken };
  },
  async login(formData) {
    try{
      const { data, token } = await api.post("/users/login", formData); 
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("ID", data.id);
      return data
  }
    catch(e){
      return e.response.data;
    }
  },
};
