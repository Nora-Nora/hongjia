<template>
  <div id="app">
    <div class="container-fluid">
      <top-nav ref="top"></top-nav>
      <router-view/>
      <bottom :shadow="shadow"></bottom>
    </div>

  </div>
</template>

<script>
  import topNav from '@/components/topNav'
  import bottom from "@/components/bottom";

  export default {
    name: 'App',
    components: {
      topNav,
      bottom
    },
    data(){
      return{
        shadow: true
      }
    },
    created() {
      this.getToken();
    },
    methods: {
      //获取token
      getToken() {
        let token = window.localStorage.getItem('token');
        this.sendHttp({
          method: 'post',
          url: `${this.accountUrl}/api/accesstoken`,
          data: {},
        }).then(res => {
          if (res.code == '0') {
            // 把获取到的存到本地缓存
            window.localStorage.setItem('token', res.data.token);
            //获取轮播
            this.$refs.top.getBanner();
          }
        })
      }
    }
  }

  window.onload = function() {
    document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    })
    document.addEventListener('gesturestart', function(event) {
      event.preventDefault()
    })
  }
</script>

<style lang="less">
  @import "assets/style/common";
</style>