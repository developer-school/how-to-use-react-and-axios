import { AxiosInstance } from "axios";
import axiosInstance from "../../http/client/axios.client";

export function PersonRepository(axios: AxiosInstance) {
  return {
    getAll: async () => [
      {
        id: 1,
        first_name: "Paul",
        last_name: "Halliday",
        email: "hello@developer.school",
        avatar: "https://developer.school/favicon.ico",
      },
      {
        id: 2,
        first_name: "Clay",
        last_name: "Merington",
        email: "cmerington1@whitehouse.gov",
        avatar:
          "https://robohash.org/consequunturconsequaturiure.png?size=50x50&set=set1",
      },
      {
        id: 3,
        first_name: "Jodie",
        last_name: "Rangall",
        email: "jrangall2@bbc.co.uk",
        avatar:
          "https://robohash.org/utcorruptitemporibus.png?size=50x50&set=set1",
      },
      {
        id: 4,
        first_name: "Walker",
        last_name: "Boothebie",
        email: "wboothebie3@gov.uk",
        avatar: "https://robohash.org/etomnisitaque.png?size=50x50&set=set1",
      },
      {
        id: 5,
        first_name: "Jaquenette",
        last_name: "Shiril",
        email: "jshiril4@cornell.edu",
        avatar:
          "https://robohash.org/debitiseaquenumquam.png?size=50x50&set=set1",
      },
      {
        id: 6,
        first_name: "Reinhold",
        last_name: "Wardingly",
        email: "rwardingly5@privacy.gov.au",
        avatar:
          "https://robohash.org/asperioresmaioresex.png?size=50x50&set=set1",
      },
      {
        id: 7,
        first_name: "Wilt",
        last_name: "Firks",
        email: "wfirks6@vkontakte.ru",
        avatar:
          "https://robohash.org/etvoluptatescumque.png?size=50x50&set=set1",
      },
      {
        id: 8,
        first_name: "Edmund",
        last_name: "Tinniswood",
        email: "etinniswood7@bluehost.com",
        avatar:
          "https://robohash.org/doloreitaquelaboriosam.png?size=50x50&set=set1",
      },
      {
        id: 9,
        first_name: "Regina",
        last_name: "Glanert",
        email: "rglanert8@storify.com",
        avatar: "https://robohash.org/iustoautquo.png?size=50x50&set=set1",
      },
      {
        id: 10,
        first_name: "Solomon",
        last_name: "Tant",
        email: "stant9@utexas.edu",
        avatar: "https://robohash.org/ducimusremmaxime.png?size=50x50&set=set1",
      },
      {
        id: 11,
        first_name: "Catlin",
        last_name: "Konzel",
        email: "ckonzela@aol.com",
        avatar:
          "https://robohash.org/saepequisquamquam.png?size=50x50&set=set1",
      },
      {
        id: 12,
        first_name: "Elisha",
        last_name: "Wulfinger",
        email: "ewulfingerb@wired.com",
        avatar:
          "https://robohash.org/beataeoptiosoluta.png?size=50x50&set=set1",
      },
      {
        id: 13,
        first_name: "Alex",
        last_name: "Ballance",
        email: "aballancec@qq.com",
        avatar: "https://robohash.org/undeetqui.png?size=50x50&set=set1",
      },
      {
        id: 14,
        first_name: "Nora",
        last_name: "Chooter",
        email: "nchooterd@boston.com",
        avatar:
          "https://robohash.org/porrooptioeligendi.png?size=50x50&set=set1",
      },
      {
        id: 15,
        first_name: "Cal",
        last_name: "Breznovic",
        email: "cbreznovice@sina.com.cn",
        avatar:
          "https://robohash.org/repellatvoluptatibusquas.png?size=50x50&set=set1",
      },
    ],
    getById: async (id: number) => (await axios.get(`/people/${id}`)).data,
    getByName: async (name: string) =>
      (await axios.get(`/people?name=${name}`)).data,
    getByEmail: async (email: string) =>
      (await axios.get(`/people?email=${email}`)).data,
  };
}

export default PersonRepository(axiosInstance);
