import axios from "axios";

/**
 * 设置你可用的后端服务URL即可
 */

// 有上下文的后端接口
export const axiosWithContext = axios.create({
    baseURL: "http://你的后端ip:端口"
})

// 没有上下文的后端接口
export const axiosWithoutContext = axios.create({
    baseURL: ""
})