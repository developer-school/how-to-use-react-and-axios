import { AxiosInstance } from "axios";
import axiosInstance from "../../http/client/axios.client";

export function PersonRepository(axios: AxiosInstance) {
  return {
    getAll: async () => (await axios.get("/people")).data,
    getById: async (id: number) => (await axios.get(`/people/${id}`)).data,
    getByName: async (name: string) =>
      (await axios.get(`/people?name=${name}`)).data,
    getByEmail: async (email: string) =>
      (await axios.get(`/people?email=${email}`)).data,
  };
}

export default PersonRepository(axiosInstance);
