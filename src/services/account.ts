import Axios from './requestManager'

let login = (credentials: any) => {
    return Axios.post('/api/login', credentials)
}

let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token: string) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    isLogged
}