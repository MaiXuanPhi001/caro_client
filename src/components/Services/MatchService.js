import axiosInstance from "./axios"

export const getById = async (id) => {
    const res = await axiosInstance.get('api/match/getById/' + id)
    return res
}