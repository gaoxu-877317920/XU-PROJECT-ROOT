import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'


export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        // props:true,

        props(route){
            return {
                keyword3:route.params.keyword,
                keyword4:route.query.keyword2,
            }
        }
    },
    {
        path: '/register',
        component: Register,
        meta: { // 需要隐藏footer的路由添加此配置
          isHideFooter: true
        }
      },
      
      {
        path: '/login',
        component: Login,
        meta: {
          isHideFooter: true
        }
      },
]