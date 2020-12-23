<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/componens/Header'
import Footer from '@/componens/Footer'
export default {
  name: '',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>

