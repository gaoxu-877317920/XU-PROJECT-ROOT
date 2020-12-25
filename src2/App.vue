<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from '@/components/Footer'
import typeNav from '@/components/Nav'
import {getCateforyList, reqCategoryList}from './api'
export default {
  name: 'App', 


  mouted(){
    getCategoryList().then(result=>{
  
    })
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>

