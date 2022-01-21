import Axios from "axios";

const instance = Axios.create({
    baseURL: 'http://localhost:8080'
});

export default {

    async index() {
        const { data } = await instance.get("/");

        return data;
    },

    async get(id: number) {
        const { data } = await instance.get(`/${id}`);

        return data;
    },

    async put(id: number, state: "OPEN" | "CLOSED") {
        await instance.put("/", { id, state });
    },

    async create(title: string, description: string, customer: string) {
        await instance.post("/", { title, description, customer });
    },

    async delete(id: number) {
        await instance.delete(`/${id}`);
    }

}