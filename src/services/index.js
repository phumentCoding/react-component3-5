//install axios -> npm i axios or pnpm add axios
import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})
