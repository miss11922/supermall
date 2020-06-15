// 首页的所有请求的封装

import request from './request'

export function getHomeMultidata(){
    return request({
      url: '/home/multidata'  
    })
}

export function getHomeGoods(type){
    return request({
      url: '/home/data',
      params: {
          type: type,
          page: 1
      }  
    })
}