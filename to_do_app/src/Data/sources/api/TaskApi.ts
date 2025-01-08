import axios from "axios";


const TaskApi = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        "Content-Type":'aplication/json'
    }
});

export { TaskApi } 