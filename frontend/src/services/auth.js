import api from "./axiosClient";

export const auth = {
  async getCsrf() {
    const {
      data: { csrfToken },
    } = await api.get("/users/csrf-token");
    return { csrfToken };
  },
  async login(formData) {

      const { data } = await api.post("/users/login", formData) ; 
      //localStorage.setItem("jwtToken", data.token);
      localStorage.setItem("userID", data.id);
      return data

}
};
