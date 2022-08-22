import axios from 'axios';

const cityServerInstance = axios.create({
    baseURL:'https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955'
})

cityServerInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (response) => {
        // GlobalError <div>ServerError</div>
        throw new Error(response.error.massage)
    }
)

cityServerInstance.interceptors.request.use()

export default cityServerInstance