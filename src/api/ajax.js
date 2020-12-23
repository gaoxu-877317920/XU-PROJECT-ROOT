

/* axios二次封装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
 */
import axios from 'axios'
import Nprogress from'Nprogress'
import 'nprogress/nprogress.css'
//配置通用的基础路径和超时
const service = axios.create({
    baseURL: 'http://39.99.186.36/',
    timeout:20000,
})
//添加请求拦截器
service.interceptors.request.use((config)=>{
    //请求进度条写在响应拦截器
    Nprogress.start()
    return config
})
//添加响应拦截器
service.interceptors.response.use(
    response=>{

        Nprogress.done()

       
        return response .data
    },
    erepr=>{
            //请求失败返回的回调
            //隐藏请求进度条:在响应拦截器失败的回调中
            Nprogress.done()
    }
)
