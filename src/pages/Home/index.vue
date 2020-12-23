<template>
  <div>
    <TypeNav/>
    <!-- <type-nav/> -->
    <list-container/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>

  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'

export default {
  name: 'Home',

  // 注册局部组件
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>