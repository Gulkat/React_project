import axios from 'axios';
import {store} from "../../store/initStore";

const fakeServerInstance = axios.create({
    baseURL:'http://localhost:3004/'
});

fakeServerInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (response) => {
        store.dispatch({
            type: 'setGlobalError',
            payload: {message: response.message}
        });
        throw new Error(response);
    }
 );

fakeServerInstance.interceptors.request.use();

export default fakeServerInstance;