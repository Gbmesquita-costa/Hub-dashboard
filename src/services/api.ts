import axios from "axios"
import { destroyCookie, parseCookies } from "nookies"

const { "user_token": token } = parseCookies()

export const Axios  = axios.create({
    baseURL: "https://hub-backend-iota.vercel.app"
})

if (token) {
    Axios.defaults.headers["Authorization"] = `Bearer ${token}`
}

Axios.interceptors.response.use((response) => {
    if (response.data.message === "Invalid Token => jwt expired") {
        destroyCookie(undefined, "user_token")
        window.location.href = "/"
    }

    return response
})