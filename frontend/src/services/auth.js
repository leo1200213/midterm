import api from "./axiosClient";

export const auth = {
  async getCsrf() {
    const {
      data: { csrfToken },
    } = await api.get("/users/csrf-token");
    return { csrfToken };
  },
};
