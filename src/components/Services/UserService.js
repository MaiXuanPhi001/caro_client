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

export const loginFacebook = async (data) => {
    const res = await axiosInstance.post('api/user/loginFacebook', data)
    return res
}

export const getAll = async () => {
    const res = await axiosInstance.get('api/user/getAll')
    return res
}

export const sendEmail = async (email) => {
    const res = await axiosInstance.post('api/otp/sendMail', { email })
    return res
}

export const veryCodeOtp = async (email, codeOTP) => {
    const res = await axiosInstance.post('api/otp/very', { email, codeOTP })
    return res
}

export const changePassword = async (email, newPassword) => {
    const res = await axiosInstance.post('api/user/changePassword', { email, newPassword })
    return res
}