import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//service是一个能发任意的ajax的函数,当然可以作为对象使用
const service = axios.create({
    baseURL: '/api',
    timeout: 20000,
})
//添加请求拦截器
service.interceptors.request.use((config) => {
    //在请求拦截其中:添加请求进度条
    nprogress.start()
    //必须返回config
    return config    //返回conifg数据的后面  就会使用xhr 发送sjax请求

})
//添加响应拦截器
service.interceptors.response.use((response) => {
    //在响应拦截器中添加成功回调,并隐藏请求进度条
    Nprogress.done()
    //返回成功的data数据
    return response.data


},
    error => {
        //请求失败返回的回调;并隐藏请求进度条

        Nprogress.done()
        alert(error.message||'错误的信息请注意')
        return Promise.reject(error)
    }


)
export default service



