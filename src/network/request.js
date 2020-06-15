import axios from 'axios'

export default function request(config){
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 0
    })

    return instance(config)
}