<template>
  <div class="header">
  <div class="container">
    <div class="row">
      <div class="headBox col-sm-12 row">
        <h1 class="logo">
          <router-link to="/">
            <img src="~img/home/logo.png" :alt="this.seoName"></router-link>
        </h1>
        <div class="name" style="text-align: center">
          <h3 class="name_m" style="font-size: 30px">深圳<span style="color: #ea150b">鸿佳餐饮</span>管理有限公司</h3>
          <div class="name_en" style="font-size: 14px;color: #999">HONGJIA &nbsp;&nbsp;&nbsp; MEAL &nbsp;&nbsp;&nbsp; MANAGE &nbsp;&nbsp;&nbsp; COMPANY</div>
        </div>
        <div class="name_s"><span style="font-size: 18px;color: #ea150b;">食堂承包&nbsp;&nbsp;&nbsp; 团餐服务</span><br>专注工厂企业单位食堂承包、食材配送、厨房设计</div>
      </div>
    </div>
  </div>

    <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="collapsibleNavbar">
        <ul class="navbar-nav col-12 col-sm-12 col-md-11 col-lg-10 col-xl-8 row text-center">
          <li class="nav-item col">
            <router-link class="nav-link" to="/" exact>首页</router-link>
          </li>
          <li class="nav-item col">
            <router-link class="nav-link" to="/module">菜谱系列</router-link>
          </li>
          <li class="nav-item col">
            <router-link class="nav-link" to="/community">膳食标准</router-link>
          </li>
          <li class="nav-item col">
            <router-link class="nav-link" to="/family">卫生管理</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="banner">
      <div id="banner" class="carousel slide" data-ride="carousel">

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src="~img/home/banner1.png" alt="" width="100%" height="100%">
        </div>
        <div class="carousel-item" >
          <img src="~img/home/banner2.png" alt="" width="100%" height="100%">
        </div>
        <div class="carousel-item" >
          <img src="~img/home/banner3.png" alt="" width="100%" height="100%">
        </div>
      </div>

      <!-- 左右切换按钮 -->
      <a class="carousel-control-prev" href="#banner" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#banner" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "topNav",
    data() {
      return {
        banner: [],
        showTimeout: 0,
        activeIndex: '',
        bannerHeight: document.body.clientWidth / 2.8,
        isAbout:false //当前路由是否为关于我们子页面
      }
    },
    mounted() {
      //获取轮播数据
      const that = this;
      let path = this.$route.path;
      this.activeIndex = path;
      //设置顶部轮播高度
      window.onresize = function () {
        let width = document.body.clientWidth;
        that.bannerHeight = width / 2.8;
      }
      this.bannerHeight = document.body.clientWidth / 2.8;
    },
    watch:{
      '$route'(to,from){
        this.getRoute();
      }
    },
    methods: {
      //检测当前页面是否为关于我们子页面
      getRoute(){
        let pathUrl = this.$route.path;
        if(pathUrl=='/about/videoGroup' || pathUrl=='/about/successCase' || pathUrl=='/about/synopsis'){
          this.isAbout = true;
        }else{
          this.isAbout = false;
        }
      },
      //导航跳转具体页
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.$router.push({path: key});
      },
      //获取首页轮播
      getBanner() {
        let token = window.localStorage.getItem('token');
        if (token) {
          this.getBannerData();
        }else{
          this.getToken();
        }
      },
      //获取轮播
      getBannerData(){
        this.sendHttp({
          url: this.baseUrl + '/index/getplate',
          method: 'post',
          data: {alias: 'banner', webpage: 'www'}
        }).then(res => {
          if (res.code == '0') {
            this.banner = res.data;
            //console.log(res);
          }
        })
      },
      //获取token
      getToken() {
        this.sendHttp({
          method: 'post',
          url: `${this.accountUrl}/api/accesstoken`,
          data: {},
        }).then(res => {
          if (res.code == '0') {
            // 把获取到的存到本地缓存
            window.localStorage.setItem('token', res.data.token);
            //获取轮播
            this.getBannerData();
          }
        })
      },
      //轮播跳转
      toUrl(url) {
        window.location.href = url;
      },
      //搜索
      search(e) {
        let keyboard = e.target.value;
        window.sessionStorage.setItem('keyboard', keyboard);
        let key = window.sessionStorage.getItem('keyboard');
        this.$router.push({
          path: '/news',
          query: {
            keyboard: key
          }

        })
      }
    }
  }

  $(function () {
    $('nav ul li').click(function () {
      hideNav();
    }).not($('nav ul .dropdown'));

    $('.dropdown-menu .dropdown-item').click(function () {
      hideNav();
    });

    function hideNav() {
      $('.navbar-collapse').removeClass('show');
    }

    $('nav ul .dropdown').click(function () {
      $('.navbar-collapse').addClass('show');
    })
  });

</script>

<style scoped lang="less">
  nav{
    ul{
      padding: 0;
    }
  }
  .dropdown-item.active, .dropdown-item:active {
    background: #ea150b;
  }
  .dropdown-menu {
    width: 100%;
    min-width: 0;
    text-indent: 5px;
    margin: 0;
    padding: 0;

    .dropdown-item {
      padding: .25rem .2rem;
      border-bottom: 1px solid #ececec;

      &:last-child {
        border: none;
      }
    }
  }

  .dropdown-menu .on {
    background: #ea150b;
    color: #ffffff;
  }

  .header {
    .navbar-brand {
      margin: 0;
    }

    .headBox {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 80px;

      .logo {
        width: 150px;
        a {
          display: block;
          width: 100%;
          img {
            width: 100%;
          }
        }
        @media (max-width: 476px){
          display: none;
        }

      }
      .name{
        margin: 20px auto;
        margin-bottom: 0;
        padding-bottom: 20px;
      }

      .search {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #656565;

        .lan {
          padding-left: 10px;
          display: flex;
          flex-direction: row;

          div {
            cursor: default;
            padding: 0 4px;

            &.on {
              color: #00a1ea;
              font-weight: bold;
            }
          }
        }

        input {
          border: 1px solid #E6E6E6;
          padding: 6px 10px;
          font-size: 14px;
          @media (max-width: 768px){
            width: 130px;
          }
        }
      }
    }

    .banner {
      .carousel-control-prev-icon {
        background: url("~img/home/left.png") center no-repeat;
      }

      .carousel-control-next-icon {
        background: url("~img/home/right.png") center no-repeat;
      }

      .carousel-control-prev-icon, .carousel-control-next-icon {
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 6px;
        width: 30%;
        height: 22%;
        background-size: 100%;
        @media (max-width: 768px){
          display: none;
        }
      }
      .carousel-indicators{
        bottom: 5%;
        li{
          width: 3%;
          padding: 1px 0;
          @media (max-width: 576px){
            padding: 0;
          }
          border: none;
          border-radius: 6px;
          &.active{
            width: 4%;
          }
        }
      }

    }
  }

</style>

<style scoped lang="less">
  nav {
    background: #ea150b;
    @media (max-width: 700px) {
      font-size: 14px;
      .dropdown-menu a{
        font-size: 14px;
      }
    }
  }

  .navbar {
    padding: 0;

    .navbar-nav {
      margin: 0 auto;

      li {
        padding: 0;

        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #fff;
    @media (max-width: 625px) {
      padding: 5px 0;
    }

    &.on {
      background: #fff;
      color: #333;
    }

  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, .5);
  }

</style>
