import axios from 'axios'

export default function request(baseConfig){
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 0
    })

    instance(baseConfig.config).then(res => {
        baseConfig.success(res)
    }).catch(err => {
        baseConfig.failure(err)
    })
}