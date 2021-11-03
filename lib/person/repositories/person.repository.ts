import { AxiosInstance } from "axios";
import axiosInstance from "../../http/client/axios.client";
import { Person } from "../models/person";

type IPersonRepository = {
  getAll: () => Promise<Person[]>;
  getById: (id: number) => Promise<Person>;
  getByName: (name: string) => Promise<Person>;
  getByEmail: (email: string) => Promise<Person>;
  create: (person: Person) => Promise<void>;
  update: (person: Person) => Promise<void>;
  delete: (id: number) => Promise<void>;
};

export function PersonRepository(axios: AxiosInstance): IPersonRepository {
  return {
    getAll: async () => (await axios.get<Person[]>("/people")).data,
    getById: async (id: number) =>
      (await axios.get<Person>(`/people/${id}`)).data,
    getByName: async (name: string) =>
      (await axios.get<Person>(`/people?name=${name}`)).data,
    getByEmail: async (email: string) =>
      (await axios.get<Person>(`/people?email=${email}`)).data,
    create: async (person: Person) => await axios.post("/people", person),
    update: async (person: Person) =>
      await axios.put(`/people/${person.id}`, person),
    delete: async (id: number) => await axios.delete(`/people/${id}`),
  };
}

export default PersonRepository(axiosInstance);
