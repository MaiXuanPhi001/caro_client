import axiosInstance from "./axios";

export const login = async (email, password) => {
    const res = await axiosInstance.post('/api/user/login', { email, password })
    return res
}

export const getById = async (id) => {
    const res = await axiosInstance.get('api/user/getById/' + id)
    return res.data
}

export const register = async (data) => {
    const res = await axiosInstance.post('api/user/register', data)
    return res
}