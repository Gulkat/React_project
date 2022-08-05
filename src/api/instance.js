import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL:'http://localhost:3004/'
});

// fakeServerInstance.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     (response) => {
//         throw new Error(response.error.massage)
//     }
// )

fakeServerInstance.interceptors.request.use()

export default fakeServerInstance